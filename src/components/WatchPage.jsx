import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParms] = useSearchParams();
  const [video, setVideo] = useState("");

  const getVideo = async () => {
    let data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParms.get(
        "v"
      )}&key=AIzaSyCmaHFyRVRDxruK0ftX1UQaIdqlmqIrawg`
    );
    let json = await data.json();
    console.log(json);
    setVideo(json.items);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, [video]);

  return (
    <div>
      {/* <iframe
        className="px-2"
        width="1000"
        height="700"
        // src={video.item.}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default WatchPage;
