import React from "react";
import VideoContainer from "./VideoContainer";
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer>
        <VideoCard />
      </VideoContainer>
    </div>
  );
};

export default MainContainer;
