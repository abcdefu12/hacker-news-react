import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
// import { category, categoryList } from "../atom/category";
import GroupNews from "../render/GroupNews";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);
    const [topPressed, setTopPressed] = useState(false);
    const [jobPressed, setJobPressed] = useState(false);
    const [detailIDs, setDetailIDs] = useState([]);

    const {category} = useParams();
                

    const getTotalIDs = async() => {
        const result = await(
            await fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json?limitToFirst=10&orderBy="$key"`)).json();

        const result2 = await getDetailIDs(result);
        setDetailIDs(result2);
        setLoading(false);
        return result2;
    };
    
    
    const getDetailIDs = async (detailArr) => {
        return await Promise.all(
            detailArr.map(async (detail) => {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${detail}.json`);
                return await response.json();
            })
        )
    }

   

    useEffect(() => { getTotalIDs(); setLoading(true); return; }, [category]);


    return(    
        <div className={styles.top}>
            {loading ? <Loading /> : 
                <div>
                    <Template category={category} />
                    <div className={styles.top_content}>

                        {/* BANNER */}
                        <div className={styles.top_banner}>
                            <div className={styles.top_banner_text}> {category.toUpperCase()} </div>
                        </div>

                        {/* BOX */}
                        {detailIDs.map((detailID)=>(
                            <Link to ={`/${category}/${detailID.id}`}>
                                
                                <GroupNews
                                    by ={detailID.by}
                                    id={detailID.id}
                                    title={detailID.title}
                                    url={detailID.url} 
                                    text={detailID.text}
                                    date={detailID.time}
                                    point={detailID.score}
                                    many={detailID.descendants}
                                    kid={detailID.kids}
                                    // category={category}
                                
                                />
                            </Link>

                        ))}
                       
                    </div>

                </div>              
            }
        </div>
    );
}
export default Top;


