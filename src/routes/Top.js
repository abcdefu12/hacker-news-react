import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import {useState, useEffect} from "react";


function Top(){
    const [loading, setLoading] = useState(true);
    const [top, setTop] = useState([]);
    const [topPressed, setTopPressed] = useState(false);

    const getTop = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json"
                )
                ).json();
                setTop(json.slice(0,10));
                setLoading(false);
                setTopPressed(true);                   
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
                    <Template TopPressed = {topPressed} />
                    <div className={styles.top_content}>
                        {/* top페이지 내용 작성 */}

                        {/* TOP BANNER */}
                        <div className={styles.top_banner}>
                            <div className={styles.top_banner_text}>TOP</div>
                        </div>

                        {/* TOP BOX */}
                        <div className={styles.top_box}>
                            <div className={styles.top_box_page}>
                                <div className={styles.top_box_page_text}>.com</div>
                            </div>
                            <div className={styles.top_box_title}>title of top news</div>
                        </div>

                        <div className={styles.top_box}></div>
                        <div className={styles.top_box}></div>
                        <div className={styles.top_box}></div>
                        <div className={styles.top_box}></div>
                        <div className={styles.top_box}></div>
                        <div className={styles.top_box}></div>



                    </div>

                </div>              
            }
        </div>
    );
}
export default Top;


