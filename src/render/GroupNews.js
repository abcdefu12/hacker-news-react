import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../routes/Top.module.css";

function GroupNews({ by, title, url }){
    return(
        <div>
            <a href={url}>
            <div className={styles.top_box}>
                {/* PAGE(.com) */}
                <div className={styles.top_box_page}>
                    <div className={styles.top_box_page_text}> {by}.com </div>
                </div>
                {/* TITLE */}
                <div className={styles.top_box_title}>{title}</div>
                {/* POINT */}
                {/* BY */}
                {/* DAY */}
                {/* COMMENTS */}
            </div>

            </a>
        </div>
    );
}
export default GroupNews;