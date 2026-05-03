import { useState } from "react";
import "./App.css";

function App() {
  const [Videos, setVideo] = useState([]);

  const Response = async () => {
    const res = await fetch(
      " https://api.freeapi.app/api/v1/public/youtube/videos"
    );
    const data = await res.json();
    setVideo(data.data.data);
  };

  return (
    <div className="app">
      <button className="btn" onClick={Response}>
        Load Videos
      </button>

      <div className="grid">
        {Videos.map((video) => {
          return (
            <div className="card" key={video.items.id}>
              <p className="title">{video.items.snippet.title}</p>

              <p className="channel">{video.items.snippet.channelTitle}</p>

              <img
                className="thumb"
                src={video.items.snippet.thumbnails.high.url}
              />

              <p className="views">👁 {video.items.statistics.viewCount}</p>

              <p className="likes">👍 {video.items.statistics.likeCount}</p>

              <p className="duration">
                ⏱ {video.items.contentDetails.duration}
              </p>

              <p className="date">📅 {video.items.snippet.publishedAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
