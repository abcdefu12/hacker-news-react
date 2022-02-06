import { useState, useEffect } from "react";
import Template from '../components/Template';
import Loading from "../components/Loading";
import {useParams} from "react-router-dom";
import styles from "./Main.module.css";
import TopFive from "../components/TopFive";

function Main() {
    const [loading, setLoading] = useState(true);
    const [topMain, setTopMain] = useState([]);
    
    const getTopID = async() => {
        const result = await(
            await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?limitToFirst=5&orderBy="$key"`)).json();

        const result2 = await getTopMain(result);
        setTopMain(result2);
        setLoading(false);
        return result2;
    };
    
    const getTopMain = async (idArr) => {
        return await Promise.all(
            idArr.map((id) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.json());
            })
        )
    }
    // const getTopMain = async() => {
    //     for( let i=0; i<5; i++){  
    //         const json = await(
    //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${topID[i]}.json`)        
    //         ).json();
    //         setTopMain(json);
    //     };    
    // };


    useEffect(() => { 
        getTopID();
    }, []);
    // useEffect(()=>{ getTopMain(); },[id])

    // console.log(topID);
    console.log(topMain);
    // console.log("---------------------------------");

    return(
        <div className={styles.main}>
            {loading ? <Loading /> :          
            <div>
                <Template />
                <div className={styles.main_content}>
                    <TopFive />
                </div> 
            </div>    
            }
        </div>       
    );
}
export default Main;