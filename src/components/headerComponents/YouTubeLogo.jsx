import React from "react";

const YouTubeLogo = () => {
  return (
    <div className="relative">
      <span
        className="absolute -right-2 text-gray-600 top-2"
        style={{ fontSize: "10px" }}
      >
        IN
      </span>
      <div className="w-24">
        <img
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
          alt="YouTube-logo"
        />
      </div>
    </div>
  );
};

export default YouTubeLogo;
