import React from 'react';
import styles from './videoItem.module.css'
const VideoItem = props => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    let title = props.video.snippet.title;
    if(title.length > 50){
        title = title.substring(0,50);
        title += "....";
    }
    return(
        <>
        <div className={`${styles.videoBlock}  ${displayType}`} onClick={() => props.onVideoClick(props.video)}>
            <img 
            className={`${styles.thumbnails}  ${displayType} ` } 
            src = {props.video.snippet.thumbnails.default.url}
            alt = "thumbnails"/>
            <div className={`${styles.thumbnailsText} ${displayType} `}>
                <div className={styles.thumbsnailsTitle}>
                    <h4>{title}</h4>
                </div>
                <div className={`${styles.thumbnailsAuthor} ${displayType}`}>
                    <h5>{props.video.snippet.channelTitle}</h5>
                </div>
            </div>
        </div>
        </>
        )
}
export default VideoItem;