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
    
    
    const getDetailIDs = async (idArr) => {
        return await Promise.all(
            idArr.map(async (id) => {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                return await response.json();
            })
        )
    }

   

    useEffect(() => { getTotalIDs(); setLoading(true); return; }, [category]);

    // 로그 삭제
    console.log("------------");
    console.log(category);
    console.log(detailIDs);

    return(    
        <div className={styles.top}>
            {loading ? <Loading /> : 
                <div>
                    <Template Category={category} />
                    <div className={styles.top_content}>

                        {/* BANNER */}
                        <div className={styles.top_banner}>
                            <div className={styles.top_banner_text}> {category.toUpperCase()} </div>
                        </div>

                        {/* BOX */}
                        {detailIDs.map((detailID)=>(
                            <GroupNews 
                            by ={detailID.by}
                            id={detailID.id}
                            title={detailID.title}
                            url={detailID.url} 
                            // kids
                            // text
                            
                            // time
                            // by
                            // type
                            
                            />

                        ))}
                       
                    </div>

                </div>              
            }
        </div>
    );
}
export default Top;


