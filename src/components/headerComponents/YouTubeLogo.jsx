import React from "react";
import { Link } from "react-router-dom";

const YouTubeLogo = () => {
  return (
    <Link to={"/"}>
      <div className="relative left-2 cursor-pointer">
        <span
          className="absolute -right-2 text-gray-600 top-2"
          style={{ fontSize: "10px" }}
        >
          IN
        </span>
        <div className="w-24 md:w-28">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="YouTube-logo"
            // loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
};
export default YouTubeLogo;
