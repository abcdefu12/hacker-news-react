import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import DetailComCard from "./DetailComCard";


function DetailComments({kids}){

    const [loading, setLoading] = useState(true);

    let index = 0;
    
    const getComments = async() => {
        
        for( let index = 0; index<kids.length; index++ ){
                const result = await(
                
                await fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[index]}.json`)).json();
                setComments(result);
            }
            setLoading(false);
            
    };
        
    // for( index=0; index<kids.length; index++){ return index; }

    // const [mainID, setMainIDs]= useState([]);
    // const getMainIDs = async (kids) => {
    //     return await Promise.all(
    //         kids.map(async (index) => {
    //             const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json`);
    //             setLoading(false);
    //             return await response.json();
    //         })
    //     )}
    // useEffect(() => { getMainIDs() },[index]);
    // console.log(mainID);


    // const {id}= useParams();

    const [comments, setComments] = useState([]);
    useEffect(() => { getComments() },[index]);
    console.log(kids);
    // console.log(`ㅁㅁㅁㅁㅁㅁ`);
    console.log(index);
    console.log(comments);
    console.log(kids);
    // console.log(kids[0]);
    // console.log(kids.length)

     // const getTopMain = async() => {
    //    
    //         const json = await(
    //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)        
    //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${topID[i]}.json`)        
    //         ).json();
    //         setTopMain(json);
    //     };    
    // };


    // const [topMain, setTopMain]=useState([]);
    //  const getTopMain = async(kids) => {
    //     kids.map(async(index)=>{
    //         const json = await(
    //             await fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json`)        
                    
    //         ).json();

    //     })
    //         setTopMain(json);
    //     };    
    
    // useEffect(() => { getTopMain() },[index]);
    // console.log(topMain);


    return(
        <div key="detailcomments" className={styles.detail}>
            
            <DetailComCard {...comments} />
         
            <h1>{comments.by}</h1>
        

        </div>





    );
}
export default DetailComments;