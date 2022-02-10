import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css'
const VideoList = (props) => (
    <ul className={styles.videoList}>
        
        {props.videos.map(video => 
            <VideoItem key={video.id} video={video} />
        )}
    </ul>
);

export default VideoList;