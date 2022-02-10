import styles from "./Detail.module.css";
import{DiffCurrentTime} from "../style/CardStyle";
import {BsPersonCircle} from 'react-icons/bs';

function DetailComCard({by, time, text}){
    return(
        <div >
            <div className={styles.com_name}><BsPersonCircle color="#FF6600"/> {by}</div>
            <div className={styles.com_text}>{text}</div>
            <div className={styles.com_time}><DiffCurrentTime unixTime={time} /></div>
            <br/>
            

        </div>


    );

};
export default DetailComCard;