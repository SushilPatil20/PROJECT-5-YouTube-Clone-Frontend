import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import youtubeErro from "../assets/youtube-error-logo.png";
import youtubeLogo from "../assets/youtube-logo.png";

const CustomErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 space-y-6">
      {/* YouTube logo */}
      <div className="flex items-center space-x-4">
        <img
          src={youtubeErro}
          alt="Error 404 GIF"
          className="w-64  object-contain"
        />
        <img src={youtubeLogo} alt="YouTube Logo" className="w-32 h-20" />
      </div>
      {/* Error Message and Status Code */}
      <h1 className="text-4xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-700">
        We can't seem to find the page you're looking for.
      </p>
      <span className="text-3xl font-semibold text-gray-800">
        404 - Not Found
      </span>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default CustomErrorPage;
