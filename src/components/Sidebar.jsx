import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-md w-48">
      <h1 className="font-bold px-2">Subscription</h1>
      <ul className="p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>{" "}
        </li>
        <li>Shorts</li>
        <li>Music</li>
        <li>Videos</li>
      </ul>
      <h1 className="font-bold px-2">Watch Later</h1>
      <ul className="p-2">
        <li>Home </li>
        <li>Shorts</li>
        <li>Music</li>
        <li>Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
