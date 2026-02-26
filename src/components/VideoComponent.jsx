import React from "react";
import { useRef } from "react";
import video from "../assets/video.mp4";
import poster from "../assets/videoPoster.png";

const VideoComponent = () => {
  const videoRef = useRef(null);

  function handleMouseOver() {
    console.dir(videoRef.current.paused);
  }

  return (
    <div>
      <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        width="900px"
        height="550px"
        style={{ borderRadius: "30px" }}
        controls
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;
