import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomText(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[600px] border border-b-2 overflow-y-scroll flex flex-col-reverse p-3">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage name={c.name} message={c.message} key={i} />
          ))}
        </div>
      </div>
      <div className="flex">
        <form
          onSubmit={(e) => {
            console.log("message", liveMessage);
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Vikas",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="m-2 w-full border border-b-2 p-2"
            placeholder="Type you comment"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="m-2 px-2 bg-green-400 text-white">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
