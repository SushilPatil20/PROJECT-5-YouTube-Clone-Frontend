import React, { useState, useRef, useMemo } from "react";
import { IconButton, TextField, Avatar } from "@mui/material";
import { Close, VideoLibrary, Image } from "@mui/icons-material";
import { sanitizeString } from "../../utils/helpers";
import { useFormValidation } from "../../validations/useFormValidation";
import { createVideo } from "../../services/videoServices";
import {
  videoSchema,
  thumbnailSchema,
} from "../../validations/videoDetailsSchema";
import ButtonLoader from "../ButtonLoader";

const VideoUploadForm = ({ isOpen, onClose, videoFile, channelId }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const { register, handleSubmit, errors } = useFormValidation(videoSchema);
  const [error, setError] = useState(null);
  const videoFileRef = useRef(videoFile);
  const [loading, setLoading] = useState(false);

  const videoUrl = useMemo(() => {
    return URL.createObjectURL(videoFileRef.current);
  }, [videoFileRef.current]);

  const validateThumbnail = async (thumbnail) => {
    try {
      const validFile = await thumbnailSchema.validate({ thumbnail });
      setError(null);
      setThumbnailUrl(validFile.thumbnail);
    } catch (error) {
      setError(error.message);
    }
  };

  const onSubmit = async (videoData) => {
    try {
      setLoading(true);
      if (!thumbnailUrl) {
        throw new Error("Thumbnail is required");
      }
      if (!videoFile) {
        throw new Error("Video file is required");
      }
      const combinedData = {
        ...videoData,
        thumbnailUrl,
        videoUrl: videoFile,
        channelId,
      };
      await createVideo(combinedData);
      setError(null);
      setLoading(false);
      onClose();
    } catch (err) {
      console.error("Error uploading video:", err);
      setError(err.message || "An error occurred during video upload");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailUrl(file);
    validateThumbnail(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full rounded-none md:rounded-3xl lg:w-[70%] h-[85%] bg-white shadow-lg overflow-auto pb-3"
      >
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

        <div className="flex flex-col lg:flex-row gap-6 mt-3 px-6">
          <div className="w-full lg:w-[65%]">
            <div className="flex items-center mb-6">
              <Avatar sx={{ bgcolor: "red", mr: 2 }}>
                <VideoLibrary />
              </Avatar>
              <h3 className="text-lg font-semibold">Enter Video Details</h3>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <TextField
                  {...register("title")}
                  label="Video Title"
                  variant="outlined"
                  fullWidth
                  className="rounded-lg"
                />
                {errors.title && (
                  <p className="text-red-600 text-left mt-2">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <TextField
                  {...register("description")}
                  label="Description"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  className="rounded-lg"
                />
                {errors.description && (
                  <p className="text-red-600 text-left mt-2">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start">
                {thumbnailUrl && (
                  <div className="my-4">
                    <img
                      src={URL.createObjectURL(thumbnailUrl)}
                      alt="Thumbnail Preview"
                      className="w-48 h-28 object-cover rounded-lg"
                    />
                  </div>
                )}
                <label
                  htmlFor="thumbnail"
                  className="text-gray-600 cursor-pointer"
                >
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    id="thumbnail"
                    onChange={handleFileChange}
                  />
                  <Image fontSize="medium" className="mr-2 text-red-600" />
                  Select Thumbnail
                </label>
                {error && <p className="text-red-600">{error}</p>}
              </div>
            </div>
          </div>

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

        <div className="mt-4 flex justify-end px-6">
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 text-white py-2 px-6 rounded-full"
          >
            {loading ? (
              <ButtonLoader text={"Uploading Video..."} />
            ) : (
              "Save and Upload"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoUploadForm;
