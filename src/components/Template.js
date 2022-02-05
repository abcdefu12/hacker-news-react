import styles from "./Template.module.css";
import {Link} from "react-router-dom";
// import { Group_obj, Group_key_arr } from "./atom";
import {useState} from "react";
import Clock from "react-live-clock";


// UI ICON can be changed (design part)
import leftside from "../images/LeftSide.png";
import rightside from "../images/RightSide.png";
import navLogo from "../images/NavLogo.png";
import navSearch from "../images/NavSearch.png";
import navTop from "../images/icon_top.png";
import navTop2 from "../images/icon_top2.png";
import navNew from "../images/icon_new.png";
import navNew2 from "../images/icon_new2.png";
import navAsk from "../images/icon_ask.png";
import navAsk2 from "../images/icon_ask2.png";
import navShow from "../images/icon_show.png";
import navShow2 from "../images/icon_show2.png";
import navJobs from "../images/icon_job.png";
import navJobs2 from "../images/icon_job2.png";



function Template({TopPressed, NewPressed, ShowPressed, AskPressed, JobPressed}) {
    
    const date = new Date();

    // search working on error -> make new route or not
    const [search, setSearch] = useState(null);
    const searchClick = (event) => { setSearch(event.target.value) };


    // fetch할때 array로 불러와서 파일양 줄일 예정
    // const Group_obj = {"Top":"top", "New": "new", "Ask":"ask", "Show":"show", "Jobs":"jobs"};
    // const Group_key_arr = Object.keys(Group_obj);
    // <div>
    // { Group_key_arr.map((key)=>{
    //     return(
    //         <div key={key}>
    //             <Link to={`/page/${Group_obj[key]}`}></Link>
    //         </div>
    //     )
    // })}
    // </div>




    return(           
        <div >{/* className={styles.temp} */}

            {/* STATUS */}
            <div className={styles.temp_status}>
                {/* <img src={leftside} className={styles.temp_status_left} /> */}
                {/* <div className={styles.temp_status_left}>{date.getHours()}:{date.getMinutes()}</div> */}
                <div className={styles.temp_status_left}>
                    <Clock format={`HH:mm`} ticking={true} />
                </div>
                
                <img src={rightside} className={styles.temp_status_right} />
                <div className={styles.temp_notch}></div>
            </div>

            {/* UPPER NAV */}
            <div className={styles.temp_nav}>
                <div>
                    <Link to={"/"}>
                        <img src={navLogo} className={styles.temp_nav_logo} />
                        <div className={styles.temp_nav_text}>svelte<br/>hacker<br/>news</div>
                    </Link>
                </div>
                <img src={navSearch} className={styles.temp_nav_search} />
                <div className={styles.temp_nav_divider}></div>
            </div>


            {/* CONTENT */}
            {/* <div className={styles.temp_content}></div> */}


            {/* HOME INDICATOR */}
            <div className={styles.temp_home}></div>


            {/* UNDER NAV */}
            <div className={styles.temp_navd}>                   
                <Link to ={`/top`} > 
                    {TopPressed ? 
                        <img src={navTop2} className={styles.temp_navd_top} /> :
                        <img src={navTop} className={styles.temp_navd_top} /> 
                    } </Link>
                <Link to ={`/new`}> 
                    {NewPressed ?
                        <img src={navNew2} className={styles.temp_navd_new} /> :
                        <img src={navNew} className={styles.temp_navd_new} /> 
                    } </Link>
                <Link to ={`/ask`}>
                    {AskPressed ? 
                        <img src={navAsk2} className={styles.temp_navd_ask} /> :
                        <img src={navAsk} className={styles.temp_navd_ask} />
                    } </Link>
                <Link to ={`/show`}>
                    {ShowPressed ? 
                        <img src={navShow2} className={styles.temp_navd_show} /> :
                        <img src={navShow} className={styles.temp_navd_show} />
                    } </Link>
                <Link to ={`/jobs`}>
                    {JobPressed ? 
                        <img src={navJobs2} className={styles.temp_navd_jobs} /> :
                        <img src={navJobs} className={styles.temp_navd_jobs} />
                    } </Link>    
                <div className={styles.temp_navd_divider}></div>
            </div>


        </div>
        
    );
};

export default Template;