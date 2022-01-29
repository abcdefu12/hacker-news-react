import loadingImg from "../images/loadingLogo.png";
import styles from "./Loading.module.css";

function Loading() {
    return(
        <img src={loadingImg} className={styles.loading_logo}/>
    );
}
export default Loading;