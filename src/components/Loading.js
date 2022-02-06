import loadingImg from "../images/loadingLogo.png";
import styles from "./Loading.module.css";

function Loading() {
    return(
        <div className={styles.loading}>
            <img src={loadingImg} className={styles.loading_logo}/>

        </div>
    );
}
export default Loading;