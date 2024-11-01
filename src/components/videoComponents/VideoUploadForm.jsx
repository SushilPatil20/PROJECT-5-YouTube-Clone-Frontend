import React, { useState, useRef, useMemo } from "react";
import { IconButton, TextField, Avatar } from "@mui/material";
import { Close, VideoLibrary, Image } from "@mui/icons-material";
import { sanitizeString } from "../../utils/helpers";

const VideoUploadForm = ({ isOpen, onClose, videoFile }) => {
  const [videoData, setVideoData] = useState({
    title: sanitizeString(videoFile.name),
    thumbnailUrl: "",
    description: "",
  });
  const videoFileRef = useRef(videoFile);
  const videoUrl = useMemo(() => {
    return URL.createObjectURL(videoFileRef.current);
  }, [videoFileRef.current]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setVideoData({ ...videoData, thumbnailUrl: file });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="relative w-full rounded-none md:rounded-3xl lg:w-[70%] h-[85%] bg-white shadow-lg overflow-auto">
        <div className="flex items-center justify-between border-b border-gray-300 px-6 py-3">
          <h2 className="text-xl font-semibold text-black">
            {sanitizeString(videoFile.name)}
          </h2>
          <IconButton
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <Close />
          </IconButton>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-3 px-6">
          {/* Left: Form Section */}
          <div className="w-full lg:w-[65%]">
            <div className="flex items-center mb-6">
              <Avatar sx={{ bgcolor: "red", mr: 2 }}>
                <VideoLibrary />
              </Avatar>
              <h3 className="text-lg font-semibold">Enter Video Details</h3>
            </div>

            <form className="space-y-4">
              {/* Title Input */}
              <div className="flex items-center">
                <TextField
                  label="Video Title"
                  name="title"
                  fullWidth
                  variant="outlined"
                  value={videoData.title}
                  onChange={handleInputChange}
                  className="rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="flex items-center">
                <TextField
                  label="Description"
                  name="description"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  value={videoData.description}
                  onChange={handleInputChange}
                  className="rounded-lg"
                />
              </div>

              {/* Thumbnail File Input */}
              <div className="flex flex-col items-start">
                {videoData.thumbnailUrl && (
                  <div className="my-4">
                    <img
                      src={URL.createObjectURL(videoData.thumbnailUrl)}
                      alt="Thumbnail Preview"
                      className="w-48 h-28 object-cover rounded-lg"
                    />
                  </div>
                )}
                <label
                  htmlFor="thumbnail"
                  className="text-gray-600 cursor-pointer"
                >
                  <Image fontSize="medium" className="mr-2 text-red-600" />
                  Select Thumbnail
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                  onSelect={handleThumbnailChange}
                />
              </div>
            </form>
          </div>

          {/* Right: Video Preview Section */}
          <div className="w-full lg:w-[35%] flex flex-col items-center gap-4 border rounded-lg  mt-16">
            <div className="w-full h-48 bg-black flex items-center justify-center rounded-t-lg  overflow-hidden">
              {videoUrl ? (
                <video
                  controls
                  src={videoUrl}
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-gray-500">Video preview will appear here</p>
              )}
            </div>

            {/* Video Link and File Name */}
            <div className="text-sm text-left w-full space-y-6 px-4 pb-4">
              <div>
                <p className=" text-gray-600">Video Link </p>
                <p className="text-blue-600 cursor-pointer">
                  https://youtube.com/shorts/qb9gntza
                </p>
              </div>
              <div>
                <p className="text-gray-600">File Name: </p>
                <p>{videoFile ? videoFile.name : "No file uploaded"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end px-6">
          <button
            onClick={() => console.log("Form Submitted:", videoData)}
            className="bg-black hover:bg-gray-900 text-white py-2 px-6 rounded-full"
          >
            Save and Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadForm;
