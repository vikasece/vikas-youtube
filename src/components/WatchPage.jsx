import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParms] = useSearchParams();
  const [video, setVideo] = useState("");

  useEffect(() => {
    dispatch(closeMenu(true));
    getVideo();
  }, []);

  const getVideo = async () => {
    let data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParms.get(
        "v"
      )}&key=AIzaSyAzAVr3QmpNphEf54gcnFjI-jlEA2jFJIk`
    );
    let json = await data.json();
    setVideo(json.items[0]);
  };

  const { snippet } = video;

  return (
    <div className="flex-column w-full">
      <div className="px-5 flex">
        <iframe
          className="px-2"
          width="1000"
          height="700"
          src={"https://www.youtube.com/embed/" + searchParms.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <p>{snippet && snippet.title}</p> */}
        <div className="bg-gray-100 w-96">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
