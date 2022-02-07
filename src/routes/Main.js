import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Main.module.css";
import MainNews from "../render/MainNews"

import { categoryInfo } from "../atom/category";

function Main() {         
    return(
        <div className={styles.main}>
            <div>
                <Template />
                <div className={styles.main_content}>
                    {categoryInfo.map((info, index) => (
                        <MainNews {...info} index={index} key={info.category}/>
                    ))}
                </div> 
            </div>   
        </div>       
    );
}
export default Main;