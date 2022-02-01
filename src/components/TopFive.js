import{Link} from "react-router-dom";


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
        // ERROR LINK를 onClick 이벤트로 변경예정
        <div className={styles.main_content}>
            
            {/* TOP */}
            <Link to={`/top`}>
                <div className={styles.banner_top}>
                    <div className={styles.banner_title}>TOP 5</div>
                    <div className={styles.banner_detail}>Find out most hot issues</div>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_top}>More</div>
                    </div>                   
                </div>     
            </Link>

            <div className={styles.frame}></div>

            {/* NEW */}
            <Link to={`/new`}>
                <div className={styles.banner_new}>
                    <div className={styles.banner_title}>NEW 5</div>
                    <div className={styles.banner_detail}>Fast, Fresh, Fashionable</div>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_new}>More</div>
                    </div>
                </div>

            </Link>

            {/* ASK */}
            <Link to={`/ask`}>
                <div className={styles.banner_ask}>
                    <div className={styles.banner_title}>ASK</div>
                    <div className={styles.banner_detail}>Ask and get fresh informations</div>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_ask}>More</div>         
                    </div>
                </div>
            </Link>
            
            {/* SHOW */}
            <Link to={`/show`}>
                <div className={styles.banner_show}>
                    <div className={styles.banner_title}>SHOW</div>
                    <div className={styles.banner_detail}>Share and grow together</div>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_show}>More</div>
                    </div>
                </div>
            </Link>

            {/* JOBS */}
            <Link to={`/jobs`}>
                <div className={styles.banner_jobs}>
                    <div className={styles.banner_title}>JOBS</div>
                    <div className={styles.banner_detail}>Your new possibility</div>
                    <div className={styles.banner_more}>
                        <div className={styles.banner_more_jobs}>More</div>
                    </div>
                </div>

            </Link>
            <div className={styles.frame}></div>
            <div className={styles.frame}></div>
            <div className={styles.frame}></div>
            <div className={styles.frame}></div>
            <div className={styles.frame}></div>


            {/* {topID(top => (
                <TopFive />
            ))} */}
        

        </div>
        
    );
}
export default TopFive;