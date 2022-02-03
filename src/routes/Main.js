import { useState, useEffect } from "react";
import Template from '../components/Template';
import Loading from "../components/Loading";
import {useParams} from "react-router-dom";
import styles from "./Main.module.css";
import TopFive from "../components/TopFive";

function Main() {
    const [loading, setLoading] = useState(true);
    const [topID, setTopID] = useState([]);
    const [topMain, setTopMain] = useState([]);
    
    const getTopID = async() => {
        const json = await(
            await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json"
                )
                ).json();
                setTopID(json.slice(0,5));
                setLoading(false);      
                
    };
    
    // const getTopMain = async() => {
    //     for( let i=0; i<5; i+=1){  
    //         let id = topID[i]            
    //         const json = await(
    //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)        
    //         ).json();
    //         setTopMain(json);
    //     };    
    // };

    useEffect(() => { 
        getTopID();
        // getTopMain();    
        
    }, []);
    // useEffect(()=>{ getTopMain(); },[id])

    console.log(topID);
    console.log(topMain);
    console.log("---------------------------------");

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