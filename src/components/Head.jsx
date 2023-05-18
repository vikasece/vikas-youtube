import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://banner2.cleanpng.com/20180515/bge/kisspng-hamburger-button-computer-icons-menu-5afb7b715df0c9.7709813315264305773848.jpg"
        />
        <img
          className="h-8 mx-2 cursor-pointer"
          alt="Logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png"
        />
      </div>
      <div className="col-span-10 text-center flex">
        <input
          tye="text"
          className="w-1/2 border border-gray-400 p-2  rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full border-l-0 py-2 px-5">
          <img
            src="https://www.citypng.com/public/uploads/preview/download-blue-search-icon-button-png-11640084027s0fkuhz2lb.png"
            alt="search"
            className="h-6"
          />
        </button>
      </div>
      <div className=" col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Head;
