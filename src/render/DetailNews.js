import styles from "./Detail.module.css";
import {DiffCurrentTime} from "../style/CardStyle";


function DetailNews({title, by, descendants, time, text}){

    return(
        <div key="detailnews" className={styles.detail}>
            
            
            <div className={styles.news_title}>{title}</div>
            <div className={styles.news_text}>
                <DiffCurrentTime UnixTime={time} />
                &nbsp; <b>by {by}</b> 
            </div>
            
            <div className={styles.news_content_text}>{text}</div>

            <div className={styles.news_text_comments}>{descendants ? <>{descendants} comments</> : null}</div>

            <br />
         

        </div>





    );
}
export default DetailNews;