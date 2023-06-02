import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "w-96 h-96 border border-black p-2 " +
        (isDarkTheme && "bg-black text-green-400")
      }
    >
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className="bg-green-200"
      >
        Toggle
      </button>
      <input
        className="border border-b-4"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>Prime Number:{prime}</h1>
    </div>
  );
};

export default Demo;
