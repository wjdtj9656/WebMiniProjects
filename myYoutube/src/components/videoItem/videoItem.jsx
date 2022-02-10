import React from 'react';
import styles from './videoItem.module.css'
const VideoItem = props => {
    let title = props.video.snippet.title;
    if(title.length > 50){
        title = title.substring(0,50);
        title += "....";
    }
    return(
        <>
        <div className={styles.videoBlock}>
            <img 
            className={styles.thumbnails} 
            src = {props.video.snippet.thumbnails.default.url}
            alt = "thumbnails"/>
            <div className={styles.thumbnailsText}>
                <div className={styles.thumbsnailsTitle}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.thumbnailsAuthor}>
                    <h5>{props.video.snippet.channelTitle}</h5>
                </div>
            </div>
        </div>
        </>
        )
}
export default VideoItem;