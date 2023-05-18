import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Stocks" />
      <Button name="Namasthe" />
    </div>
  );
};

export default ButtonList;
