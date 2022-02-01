import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import {useState, useEffect} from "react";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);

    const getTop = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/showstories.json"
                )
                ).json();
                setTop(json.slice(0,5));
                setLoading(false);                   
    };
    useEffect(() => { 
        getTop();
    }, []);


    return(
        <div className={styles.top}>
            {loading ? <Loading /> :
                <div>
                    <Template />
                    <div className={styles.top_content}>
                        <h1>Show</h1>
                    </div>
                </div>
            }
        </div>
    );
}
export default Top;


