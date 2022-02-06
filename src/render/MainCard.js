import styles from "./MainNews.module.css";
function MainCard({by, descendants, id, kids, score, text, time, title}){

    return(
        <div className={styles.frame}>
           {title}<br/>
        </div>
    );
}
export default MainCard;