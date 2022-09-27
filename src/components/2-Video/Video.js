import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section id="video">
      <video controls>
        <source src="../../resources/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
