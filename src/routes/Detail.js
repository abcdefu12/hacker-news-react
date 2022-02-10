import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";

import DetailNews from "../render/DetailNews";
import DetailComments from '../render/DetailComments';

function Detail(){
    const [loading, setLoading] = useState(true);

    const {id}= useParams();
    const [details, setDetails] = useState([]);
    const getDetails = async() => {
        const result = await(
            await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)).json();

        // const result2 = await getDetailIDs(result);
        setDetails(result);
        setLoading(false);
        // return result2;
    };
    useEffect(() => { getDetails() },[id]);
    
    console.log("======");
    console.log(details);
    // console.log(category);
    console.log(id);
    console.log(details.kids)

    const path = window.location.pathname;
    // console.log(path);
    // console.log(path.slice(0,-9).slice(19));



    return(
        <div className={styles.top}>
            {loading ? <Loading key="loading"/> :
                <div>
                    <Template />
                    <div className={styles.top_content}>
                        {/* BANNER */}
                        <div className={styles.top_banner}>
                            <div className={styles.top_banner_text}>
                                {path.slice(0,-9).slice(19).toUpperCase()}     
                            </div>
                        </div>

                        {/* NEWS DETAIL */}
                        <DetailNews {...details} />

                        {/* COMMENT DETAIL */}
                        {/* {details.kids.map((kid, index)=> (
                            <DetailComments {...kid} index={index}/>
                        ))} */}
                        {/* <DetailComments kids={details.kids} /> */}
                        <DetailComments {...details} />
                        


                    </div>
                </div>
            }
        </div>
    );
};
export default Detail;