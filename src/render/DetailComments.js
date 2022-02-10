import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import DetailComCard from "./DetailComCard";


function DetailComments({kids}){
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const getComments = async() => {
        for( let index = 0; index<kids.length; index++ ){
                await fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[index]}.json`)
                .then(value => value.json())
                .then(value => setComments(prev => [...prev, value]))
            }
        setLoading(false);
    };

    useEffect(() => { getComments() }, []);

    return(
        <div key="detailcomments" className={styles.detail}>
            {comments.map((comment)=>(
                <DetailComCard {...comment} />
            )

            )
            }
            {/* <h1>{comments.by}</h1> */}
        

        </div>




    );
}
export default DetailComments;