import React, { useState } from "react";
import { useParams } from "react-router";
import { TextField, Avatar, Button } from "@mui/material";
import { VideoLibrary, Image, Movie } from "@mui/icons-material";
import { carts } from "../../utils/helpers";
import Back from "../Back";
import { useFormValidation } from "../../validations/useFormValidation";
import {
  videoSchema,
  thumbnailSchema,
  videoUploadSchema,
} from "../../validations/videoDetailsSchema";

const EditVideoData = () => {
  const { videoId } = useParams();
  const video = carts.find((video) => video.id === Number(videoId));
  const { register, handleSubmit, errors } = useFormValidation(videoSchema);

  const [videoData, setVideoData] = useState({
    title: video?.title || null,
    description: video?.description || null,
    thumbnailUrl: video?.thumbnail || null,
    videoFile: video?.url || null,
    newThumbnailUrl: null,
    newVideoFile: null,
    thumbnailError: null,
    videoError: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const validateThumbnail = async (thumbnail) => {
    try {
      const thumbnailFile = await thumbnailSchema.validate({ thumbnail });
      setVideoData((prevData) => ({
        ...prevData,
        newThumbnailUrl: thumbnailFile.thumbnail,
        thumbnailError: null,
      }));
    } catch (error) {
      setVideoData((prevData) => ({
        ...prevData,
        thumbnailError: error.message,
      }));
    }
  };

  const validateVideo = async (file) => {
    try {
      const validVideo = await videoUploadSchema.validate({ file });
      setVideoData((prevData) => ({
        ...prevData,
        newVideoFile: validVideo.file,
        videoError: null,
      }));
    } catch (error) {
      setVideoData((prevData) => ({
        ...prevData,
        videoError: error.message,
      }));
    }
  };

  const onSubmit = (data) => {
    const { videoError, thumbnailError } = videoData;
    if (!videoError && !thumbnailError) {
      const mergedData = {
        ...data,
        ...videoData,
      };
      console.log("Merged Data:", mergedData);
    } else {
      console.log("Solve errors first");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center py-8 px-6 space-y-6 md:space-y-0 md:space-x-8 w-full mx-auto">
      <form
        className="w-full bg-white shadow-lg rounded-lg p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <div>
              <TextField
                label="Video Title"
                {...register("title")}
                fullWidth
                variant="outlined"
                value={videoData.title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <p className="text-red-600 text-left mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <TextField
                label="Description"
                {...register("description")}
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                value={videoData.description}
                onChange={handleInputChange}
              />
              {errors.description && (
                <p className="text-red-600 text-left mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>
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
                onChange={(e) => validateThumbnail(e.target.files[0])}
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
              {videoData.thumbnailError && (
                <p className="text-red-600 text-left mt-2">
                  {videoData.thumbnailError}
                </p>
              )}
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
                onChange={(e) => validateVideo(e.target.files[0])}
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
              {videoData.videoError && (
                <p className="text-red-600 text-left mt-2">
                  {videoData.videoError}
                </p>
              )}
            </div>
          </div>
        </section>
        <div className="w-full md:w-60 mx-auto mt-8 ">
          <button
            type="submit"
            variant="contained"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto block"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVideoData;
