import { useState, useEffect } from "react";
import Top from "../components/Main";

import styles from "./Template.module.css";

import loadingImg from "../images/loadingLogo.png";
import leftside from "../images/LeftSide.png";
import rightside from "../images/RightSide.png";
import navLogo from "../images/NavLogo.png";
import navSearch from "../images/NavSearch.png";
import navTop from "../images/icon_top.png";
import navNew from "../images/icon_new.png";
import navAsk from "../images/icon_ask.png";
import navShow from "../images/icon_show.png";
import navJobs from "../images/icon_job.png";
import { useParams } from "react-router-dom";

function Template() {
    const [loading, setLoading] = useState(true);
    const [topID, setTopID] = useState([]);
    const getTopID = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json"
          )
        ).json();
        setTopID(json.data);
        setLoading(false);
    };
    useEffect(() => { getTopID() }, []);
        
    return(
        <div className={styles.temp}>
            {loading ? <img src={loadingImg} className={styles.temp_loadingImg}/> : 
                // TEMPLATE CONTENT            
                <div className={styles.temp}>
                    {/* STATUS */}
                    <div className={styles.temp_status}>
                        <img src={leftside} className={styles.temp_status_left} />
                        <img src={rightside} className={styles.temp_status_right} />
                        <a className={styles.temp_status_notch}></a>
                    </div>

                    {/* UPPER NAV */}
                    <div className={styles.temp_nav}>
                        <img src={navLogo} className={styles.temp_nav_logo} />
                        <div className={styles.temp_nav_text}>svelte<br/>hacker<br/>news</div>
                        <img src={navSearch} className={styles.temp_nav_search} />
                        <div className={styles.temp_nav_divider}></div>
                    </div>

                    {/* CONTENT */}
                    <div className={styles.temp_content}></div>

                    {/* HOME INDICATOR */}
                    <div className={styles.temp_home}></div>

                    {/* UNDER NAV */}
                    <div className={styles.temp_navd}>
                        <img src={navTop} className={styles.temp_navd_top} />
                        <img src={navNew} className={styles.temp_navd_new} />
                        <img src={navAsk} className={styles.temp_navd_ask} />
                        <img src={navShow} className={styles.temp_navd_show} />
                        <img src={navJobs} className={styles.temp_navd_jobs} />
                        <div className={styles.temp_navd_divider}></div>
                    </div>
                </div>}
        </div>
    );
};

export default Template;




// function TopMain(){
        //     const {topID} = useParams();
        //     const getTopMain = async() => {
        //         const json = await(
        //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${topID}.json`)
        //         ).json();
        //     // useEffect(()=>{ getTopMain()},[]);
        // };
 
    
    
        // const TopFive = topID..slice(0,5);
        // const TopMain = useParams();
       
    // }
    // 
    // console.log(TopMain);

    // useEffect(() => {
    //     getTopID();
    //     // getTopMain();
    // }, []);
    // console.log(topID);
    // console.log(topMain);