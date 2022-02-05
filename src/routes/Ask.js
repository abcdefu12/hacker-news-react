import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import {useState, useEffect} from "react";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);
    const [askPressed, setAskPressed] = useState(false);

    const getTop = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/askstories.json"
                )
                ).json();
                setTop(json.slice(0,5));
                setLoading(false);
                setAskPressed(true);                 
    };
    useEffect(() => { 
        getTop();
    }, []);


    return(
        <div className={styles.top}>
            {loading ? <Loading /> :
                <div>
                    <Template AskPressed={askPressed}/>
                    <div className={styles.top_content}>
                        {/* ASK CONTENT HERE!!!! */}

                        
                        <h1>Ask</h1>
                    </div>
                </div>
            }
        </div>
    );
}
export default Top;


