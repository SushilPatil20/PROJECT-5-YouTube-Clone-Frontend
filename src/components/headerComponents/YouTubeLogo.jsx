import React from "react";
import { Link } from "react-router-dom";

const YouTubeLogo = () => {
  return (
    <Link to={"/"}>
      <div className="relative left-2">
        <span
          className="absolute -right-2 text-gray-600 top-2"
          style={{ fontSize: "10px" }}
        >
          IN
        </span>
        <div className="w-24 md:w-26">
          <img
            src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
            alt="YouTube-logo"
          />
        </div>
      </div>
    </Link>
  );
};

export default YouTubeLogo;
