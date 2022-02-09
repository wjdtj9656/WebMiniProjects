import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Navbar from './components/searchHeader/navbar';
function App() {
  
  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCPi39u5ZGiOUhDRYkdc084fy5DmIFJs3Y", requestOptions)
      .then(response => response.json())
      .then(result => console.log(setVideos(result.items)))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <>
    <Navbar />
    <VideoList videos={videos}/>
    </>
  );
}

export default App;
