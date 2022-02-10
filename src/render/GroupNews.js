import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../routes/Top.module.css";
import { DiffCurrentTime } from "../style/CardStyle";

function GroupNews({ by, id, title, url, text, date, point, many, kid, category}){

    
    return(
        <div key="groupnews">           
            <div className={styles.top_box}>

                {/* PAGE(.com) */}
                <div className={styles.top_box_page}>
                    <div className={styles.top_box_page_text}>
                        {url ? `${url.substring(8,27).replace(/\www./g,'').toUpperCase()}` : null }
                    </div>
                </div>

                {/* TITLE */}
                <div className={styles.top_box_title}> {title} </div>
                
                {/* SUB-DETAIL */}
                <div className={styles.top_box_subdetail}> 
                    <a>{point} points</a> &nbsp;
                    <b>by {by}</b>
                    <br />

                    {/* UNIX-TIME ERROR */}
                    <DiffCurrentTime unixTime={date}/> 

                    &nbsp;<a>{many ? <>{many} comments</> : null}</a>
                </div>

            </div>
                       
        </div>
    );
}
export default GroupNews;

{/* <a href={url}></a> */}