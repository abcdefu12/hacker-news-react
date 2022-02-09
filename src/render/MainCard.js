import styles from "./MainCard.module.css";
import { Heart } from  "../style/CardStyle"
import { MdFavorite } from 'react-icons/md';
import { BsChatText } from 'react-icons/bs';


function MainCard({by, descendants, id, kids, score, text, time, title, color}){

    return(
        <div key="mainCard">            
            <div className={styles.frame}>
                <div className={styles.title}> {title} </div> 
                <div className={styles.text}>
                    {text ? `${text.slice(0,245)}...` : null }
                </div>
                <div> <Heart color={color} > 
                    <MdFavorite />&nbsp; {score} &nbsp;
                    <BsChatText className={styles.text_icon}/> {descendants}
                </Heart> </div>

            </div>      
        </div>
    );
}
export default MainCard;