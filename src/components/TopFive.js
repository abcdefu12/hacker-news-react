// import styles from "./TopFive.module.css";
import { useState, useEffect } from "react";
import styles from "./TopFive.module.css";


function TopFive({props}){
    const [topMain, setTopMain] = useState([]);
    const getTopMain = async() => {
        for( let i=0; i<5; i+=1){  
            let id = {props}[i]            
            const json = await(
                await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)        
            ).json();
            setTopMain(json);
        };    
    };
    
    useEffect(() => {        
        getTopMain();            
    }, []);
    console.log(topMain);

    return(

        <div className={styles.main_content}>
            {/* TOP */}
            <div className={styles.banner_top}></div>
            <div className={styles.frame}></div>
            <div className={styles.banner_new}></div>
            <div className={styles.banner_ask}></div>
            <div className={styles.banner_show}></div>
            <div className={styles.banner_jobs}></div>
            {/* {topID(top => (
                <TopFive />
            ))} */}
        

        </div>
        
    );
}
export default TopFive;