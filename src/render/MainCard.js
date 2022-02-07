import styles from "./MainCard.module.css";
import {Heart} from  "../style/CardStyle"

function MainCard({by, descendants, id, kids, score, text, time, title, color}){
    // console.log(color);
    return(
        <div key="mainCard">            
            <div className={styles.frame}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
                
                <br />
                <Heart color={color} > {score} <br/> {descendants} </Heart>
                
               
            </div>
            
        </div>
    );
}
export default MainCard;