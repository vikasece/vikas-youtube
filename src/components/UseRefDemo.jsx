import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const UseRefDemo = () => {
  const [y, setY] = useState(1);
  const xRef = useRef(0);
  const dispatch = useDispatch();

  const i = useRef(null);

  useEffect(() => {
    dispatch(closeMenu(true));
    i.current = setInterval(() => {
      console.log("Rendering for 1 sec");
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  console.log("Rendering");
  let x = 2;

  return (
    <div className="m-2 p-2 bg-slate-400 w-96 h-96 border border-black">
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log("X", x);
          }}
        >
          Increment
        </button>
        <span className="p-3">Let: {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increment
        </button>
        <span className="p-3">State: {y}</span>
      </div>

      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            xRef.current++;
          }}
        >
          Increment
        </button>
        <span className="p-3">Ref: {xRef.current}</span>
      </div>
      <div>
        <button
          className="p-4 m-4 bg-red-200 rounded-lg cursor-pointer"
          onClick={() => clearInterval(i.current)}
        >
          Stop Rendering
        </button>
      </div>
    </div>
  );
};

export default UseRefDemo;
