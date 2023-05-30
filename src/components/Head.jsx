import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTO_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        geSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const geSearchSuggestions = async () => {
    console.log("Iam Calling API");
    const data = await fetch(YOUTUBE_AUTO_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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

        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="Logo"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 relative">
        <div className="flex ">
          <input
            tye="text"
            className="w-1/2 border border-gray-400 p-2  rounded-l-full px-3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSuggestion(false)}
            onFocus={() => setShowSuggestion(true)}
          />

          <button className="border border-gray-400 p-2 rounded-r-full border-l-0 py-2 px-5">
            <img
              src="https://www.citypng.com/public/uploads/preview/download-blue-search-icon-button-png-11640084027s0fkuhz2lb.png"
              alt="search"
              className="h-6"
            />
          </button>
        </div>

        {showSuggestion && (
          <div className="px-2 absolute w-[37rem] bg-white  shadow-md py-2 ">
            <ul className="rounded-lg">
              {suggestions &&
                !suggestions.includes("undefined") &&
                suggestions.map((item) => (
                  <li className="hover:bg-gray-100 p-2" key={item.id}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        )}
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
