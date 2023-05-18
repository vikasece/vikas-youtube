import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img src={thumbnails.medium.url} alt="thumbnails" />
      <ul>
        <li>{title}</li>
        <li>{statistics.viewCount}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
