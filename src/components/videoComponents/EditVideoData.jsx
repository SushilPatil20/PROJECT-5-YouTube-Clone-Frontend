// EditVideoData.js
import React, { useState } from "react";
import { useParams } from "react-router";
import { TextField, Avatar, Button } from "@mui/material";
import { VideoLibrary, Image, Movie } from "@mui/icons-material";
import { carts } from "../../utils/helpers";
import Back from "../Back";

const EditVideoData = () => {
  const { videoId } = useParams();
  const video = carts.find((video) => video.id === Number(videoId));

  const [videoData, setVideoData] = useState({
    title: video?.title || "",
    description: video?.description || "",
    thumbnailUrl: video?.thumbnail || "",
    videoFile: video?.file || null,
    newThumbnailUrl: null,
    newVideoFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setVideoData({ ...videoData, newThumbnailUrl: file });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoData({ ...videoData, newVideoFile: file });
  };

  const handleSave = () => {
    console.log("Updated Video Data:", videoData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center py-8 px-6 space-y-6 md:space-y-0 md:space-x-8 w-full mx-auto">
      <div className="w-full bg-white shadow-lg rounded-lg p-4">
        <Back className="-ml-1 mb-4" />
        <div className="flex items-center space-x-2 mb-6">
          <Avatar sx={{ bgcolor: "red" }}>
            <VideoLibrary />
          </Avatar>
          <h2 className="text-xl font-semibold">
            Edit Video and the Video Details
          </h2>
        </div>

        <section className="flex flex-col md:flex-row space-x-6">
          <div className="md:w-1/2 space-y-6 z-0">
            <TextField
              label="Video Title"
              name="title"
              fullWidth
              variant="outlined"
              value={videoData.title}
              onChange={handleInputChange}
            />

            <TextField
              label="Description"
              name="description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={videoData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 md:mt-0">
            <div>
              <label
                htmlFor="thumbnail"
                className="flex items-center text-gray-600 cursor-pointer mb-2"
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
              />
              <div className="flex justify-between items-center space-x-4">
                {videoData.thumbnailUrl && (
                  <div className="flex flex-col items-center">
                    <img
                      src={videoData.thumbnailUrl}
                      alt="Previous Thumbnail"
                      className="w-40 h-20 object-cover rounded-lg"
                    />
                    <span className="text-gray-500 text-sm">
                      Previous Thumbnail
                    </span>
                  </div>
                )}
                {videoData.newThumbnailUrl && (
                  <div className="flex flex-col items-center">
                    <img
                      src={URL.createObjectURL(videoData.newThumbnailUrl)}
                      alt="New Thumbnail"
                      className="w-40 h-20 object-cover rounded-lg"
                    />
                    <span className="text-gray-500 text-sm">New Thumbnail</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="videoFile"
                className="flex items-center text-gray-600 cursor-pointer mb-2"
              >
                <Movie fontSize="medium" className="mr-2 text-red-600" />
                Upload New Video File
              </label>
              <input
                type="file"
                id="videoFile"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
              <div className="flex justify-between items-center space-x-4">
                {video.url && (
                  <div className="flex flex-col items-center">
                    <video
                      controls
                      src={video.url}
                      className="w-40 h-20 object-cover rounded-lg"
                    />
                    <span className="text-gray-500 text-sm">
                      Previous Video
                    </span>
                  </div>
                )}
                {videoData.newVideoFile && (
                  <div className="flex flex-col items-center">
                    <video
                      controls
                      src={URL.createObjectURL(videoData.newVideoFile)}
                      className="w-40 h-20 object-cover rounded-lg"
                    />
                    <span className="text-gray-500 text-sm">New Video</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="w-60 mx-auto mt-8 ">
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            fullWidth
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditVideoData;