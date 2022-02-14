import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Navbar from './components/searchHeader/navbar';
import VideoDetail from './components/videoDetailPage/videoDetail';
import styles from './app.module.css'
function App({youtube}) {
  
  const [videos,setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  }
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);
  return (
    <>
    <Navbar onSearch={search}/>
    <section className={styles.content}>
      { selectedVideo && (
      <div className={styles.detail}>
        <VideoDetail video={selectedVideo}/>
      </div>)}
    <div className={styles.list}>
      <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'}/>
    </div>
    </section>
    </>
  );
}

export default App;
