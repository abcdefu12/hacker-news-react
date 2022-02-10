import Template from '../components/Template';
import Loading from "../components/Loading";
import styles from "./Top.module.css";

import { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";

import DetailNews from "../render/DetailNews";
import DetailComments from '../render/DetailComments';

function Detail(){
    const [loading, setLoading] = useState(true);

    const {id}= useParams();
    const [details, setDetails] = useState([]);
    const getDetails = async() => {
        const result = await(
            await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)).json();
        setDetails(result);
        setLoading(false);
    };
    useEffect(() => { getDetails() },[id]);

    const path = window.location.pathname;

    return(
        <div className={styles.top}>
            {loading ? <Loading key="loading"/> :
                <div>
                    <Template category={path.slice(0,-9).slice(19)} />
                    <div className={styles.top_content}>
                        {/* BANNER */}
                        <div className={styles.top_banner}>
                            <div className={styles.top_banner_text}>
                                {path.slice(0,-9).slice(19).toUpperCase()}     
                            </div>
                        </div>

                        {/* NEWS DETAIL */}
                        <DetailNews {...details} />

                        {/* COMMENT DETAIL */}
                        <DetailComments {...details} />
                        


                    </div>
                </div>
            }
        </div>
    );
};
export default Detail;