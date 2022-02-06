import{Link} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./MainNews.module.css";
import MainCard from "./MainCard";
import {categoryList} from "../atom/category";

function MainNews({category, subCategory, color, index}){
    const [loading, setLoading] = useState(true);
    const [mainIDs, setMainIDs] = useState([]);
    
    const getTotalIDs = async() => {
        const result = await(
        await fetch(`https://hacker-news.firebaseio.com/v0/${categoryList[index]}stories.json?limitToFirst=5&orderBy="$key"`)).json();
        
        const result2 = await getMainIDs(result);
        setMainIDs(result2);
    }
    const getMainIDs = async (idArr) => {
        return await Promise.all(
            idArr.map(async (id) => {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                return await response.json();
            })
        )
    }

    useEffect(() => { 
        getTotalIDs();
        setLoading(false);
    }, [])
   
    //로그제거
    console.log(loading);
    console.log(mainIDs);
    console.log("========");

    return(
        <div className={styles.main_content}>
            <div className={styles.banner}>
                <div className={styles.banner_title}>{category}</div>
                <div className={styles.banner_detail}>{subCategory}</div>
                <Link to={categoryList[index]}>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_top}>More</div>
                    </div>
                </Link>
            </div>
            {
                loading ? "Loading" : 
                mainIDs.map((data) => (
                    <MainCard {...data} key={data.id} /> 
                ))
            }
        </div>
    );
}
export default MainNews;