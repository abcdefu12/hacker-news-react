import styles from "./MainCard.module.css";
import { Heart } from  "../style/CardStyle"
import { MdFavorite } from 'react-icons/md';
import { BsChatText } from 'react-icons/bs';


function MainCard({by, descendants, id, kids, score, text, time, title, color}){

    return(
        // MAIN CARD COMMON
        <div key="mainCard">            
            <div className={styles.frame}>
                {/* TITLE */}
                <div className={styles.title}> {title} </div>
                {/* TEXT(CONTENT) */}
                <div className={styles.text}>
                    {text ? `${text.slice(0,245)}...` : null }
                </div>
                {/* SCORE AND DESCENDANTS */}
                <div> <Heart color={color} > 
                    <MdFavorite />&nbsp;
                    {score} &nbsp;
                    {descendants ? <BsChatText className={styles.text_icon}/> : null } &nbsp;
                    {descendants? <>{descendants}</> : null }
                </Heart> </div>

            </div>      
        </div>
    );
}
export default MainCard;