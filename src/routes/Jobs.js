import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import {useState, useEffect} from "react";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);
    const [jobPressed, setJobPressed] = useState(false);

    const getTop = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/jobstories.json"
                )
                ).json();
                setTop(json.slice(0,5));
                setLoading(false);
                setJobPressed(true);                  
    };
    useEffect(() => { 
        getTop();
    }, []);

    // 로그 삭제
    console.log(top);


    return(
        <div className={styles.top}>
            {loading ? <Loading /> :
                <div>
                    <Template JobPressed={jobPressed}/>
                    <div className={styles.top_content}>
                        {/* JOB CONTENT HERE!! */}
                        
                        <h1>Jobs</h1>
                    </div>
                </div>
            }
        </div>
    );
}
export default Top;


