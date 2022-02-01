import styles from "./Template.module.css";
import {Link} from "react-router-dom";
// import { Group_obj, Group_key_arr } from "./atom";
import {useState} from "react";

import leftside from "../images/LeftSide.png";
import rightside from "../images/RightSide.png";
import navLogo from "../images/NavLogo.png";
import navSearch from "../images/NavSearch.png";
import navTop from "../images/icon_top.png";
import navNew from "../images/icon_new.png";
import navAsk from "../images/icon_ask.png";
import navShow from "../images/icon_show.png";
import navJobs from "../images/icon_job.png";

import navTopHere from "../images/icon_top2.png";

import Top from "../routes/Top";


function Template() {
    
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
                <img src={leftside} className={styles.temp_status_left} />
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
                <Link to ={`/top`}> <img src={navTop} className={styles.temp_navd_top} /> </Link>
                <Link to ={`/new`}> <img src={navNew} className={styles.temp_navd_new} /> </Link>
                <Link to ={`/ask`}> <img src={navAsk} className={styles.temp_navd_ask} /> </Link>
                <Link to ={`/show`}> <img src={navShow} className={styles.temp_navd_show} /> </Link>
                <Link to ={`/jobs`}> <img src={navJobs} className={styles.temp_navd_jobs} /> </Link>    
                <div className={styles.temp_navd_divider}></div>
            </div>


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