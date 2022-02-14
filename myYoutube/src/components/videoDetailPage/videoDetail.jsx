import React from 'react';
import styles from './videoDetail.module.css'
const VideoDetail = ({video}) => {

    return(
        <section className={styles.detail}>
            <iframe 
            className={styles.video}
            type="text/html" 
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" 
            allowfullscreen
            ></iframe>
            <div className={styles.description}>
                <h2>{video.snippet.title}</h2>
                <h2>{video.snippet.channelTitle}</h2>
                <pre className={styles.descriptionDetail}>{video.snippet.description}</pre>
            </div>
        </section>
    )
};

export default VideoDetail;