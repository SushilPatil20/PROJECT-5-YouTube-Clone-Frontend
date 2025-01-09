import React from "react";
import { Link } from "react-router-dom";
import youtubeLogo from "../../assets/youtube-logo.png";

const YouTubeLogo = () => {
  return (
    <Link to={"/"}>
      <div className="relative left-2 cursor-pointer">
        {/* <span
          className="absolute -right-2 text-gray-600 top-2"
          style={{ fontSize: "10px" }}
        >
          IN
        </span> */}
        <div className="w-24 md:w-28">
          <img src={youtubeLogo} alt="YouTube-logo" />
        </div>
      </div>
    </Link>
  );
};
export default YouTubeLogo;
