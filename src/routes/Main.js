import { useState, useEffect } from "react";
import Template from '../components/Template';
import Loading from "../components/Loading";
import {useParams} from "react-router-dom";
import styles from "./Main.module.css";

function Main() {
    const [loading, setLoading] = useState(true);
    const [topID, setTopID] = useState([]);
    const getTopID = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json"
          )
        ).json();
        setTopID(json);
        setLoading(false);
    };
    useEffect(() => { getTopID();  }, []);
    console.log(topID);
    return(
        <div className={styles.main}>
            {loading ? <Loading /> :          
            <div>
                <Template />
                <div >
                    <div className={styles.main_content}></div>
                    {/* 작성한다 메인 다섯개씩 불러오도록 */}

                </div>
            </div>
            
            }

        </div>
        
    );
}
export default Main;