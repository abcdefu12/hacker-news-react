import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import {useState, useEffect} from "react";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);
    const [newPressed, setNewPressed] = useState(false);

    const getTop = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/newstories.json"
                )
                ).json();
                setTop(json.slice(0,5));
                setLoading(false);
                setNewPressed(true);                   
    };
    useEffect(() => { 
        getTop();
    }, []);


    return(
        <div className={styles.top}>
            {loading ? <Loading /> :
                <div>
                    <Template NewPressed = {newPressed}/>
                    <div className={styles.top_content}>
                        {/* NEW CONTENT HERE!!!! */}
                        <h1>New</h1>


                        
                    </div>
                </div>
            }
        </div>
    );
}
export default Top;


