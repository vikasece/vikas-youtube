import React from "react";

const ChatMessage = ({ message, name }) => {
  return (
    <div className="flex items-center my-2 shadow-sm">
      <img
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        className="h-8"
      />
      <div className="flex-column p-2">
        <div className="font-bold">{name}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
