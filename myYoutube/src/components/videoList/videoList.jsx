import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css'
const VideoList = (props) => {

    return(
    <ul className={styles.videoList}>
        
        {props.videos.map(video => 
            <VideoItem key={video.id} video={video} onVideoClick={props.onVideoClick} display={props.display}/>
        )}
    </ul>
    )
};

export default VideoList;