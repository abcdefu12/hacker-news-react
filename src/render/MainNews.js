import{Link} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./MainNews.module.css";
import MainCard from "./MainCard";
import {categoryList} from "../atom/category";
import {Banner, Banner_More_Text} from "../style/CardStyle"

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
            <Banner color={color}>
                <div className={styles.banner_title}> {category} </div>
                <div className={styles.banner_detail}> {subCategory} </div>
                <Link to={categoryList[index]}>
                    <div className={styles.banner_more}>
                        <Banner_More_Text color={color}>More</Banner_More_Text>
                    </div>
                </Link>
            </Banner>
            {
                loading ? "Loading" : 
                mainIDs.map((data) => (
                    <Link to ={`/${categoryList[index]}/${data.id}`}>
                        <MainCard {...data} key={data.id} color={color}/> 
                    </Link>
                ))
            }
        </div>
    );
}
export default MainNews;