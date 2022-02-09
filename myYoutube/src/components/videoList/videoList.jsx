import React from 'react';
import VideoItem from '../videoItem/videoItem';

const VideoList = (props) => (
    <ul>
        {props.videos.map(video => 
            <VideoItem key={video.id} video={video} />
        )}
    </ul>
);

export default VideoList;