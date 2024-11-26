import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import UploadIcon from "@mui/icons-material/Upload";
import VideoUploadForm from "./VideoUploadForm";
import { videoUploadSchema } from "../../validations/videoDetailsSchema";
const VideoUploadModal = ({ onClose, channelId }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [openForm, setIsOpenForm] = useState(false);
  const [error, setError] = useState("");

  const handleUploadedFile = async (file) => {
    try {
      const validatedFile = await videoUploadSchema.validate({ file });
      setSelectedVideoFile(validatedFile.file);
      handleVideoUploadeForm();
    } catch (error) {
      return setError(error.message);
    }
  };

  const handleVideoUploadeForm = () => {
    if (!openForm) {
      setIsOpenForm(true);
    } else {
      onClose();
      setIsOpenForm(false);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    triggerUploadAnimation(file);
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    triggerUploadAnimation(file);
  };

  const triggerUploadAnimation = (file) => {
    setIsUploaded(true);
    setTimeout(() => {
      setIsUploaded(false);
      handleUploadedFile(file);
    }, 2000);
  };

  return !selectedVideoFile ? (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="relative w-full rounded-none md:rounded-3xl lg:w-[70%]  h-[85%] bg-white shadow-lg overflow-auto md:overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-300 px-6 py-3">
          <h2 className="text-xl font-semibold text-black">Upload videos</h2>
          <IconButton
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <Close />
          </IconButton>
        </div>

        <div
          className={`flex flex-col items-center justify-center p-4 text-center  text-gray-600`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="h-36 w-36 rounded-full bg-gray-100 flex items-center justify-center mt-20 overflow-hidden">
            <UploadIcon
              className="text-gray-400"
              sx={{
                fontSize: 80,
                transition: "transform 0.2s ease-out",
                animation: isUploaded
                  ? "crouchAndTakeoff 2s ease forwards"
                  : "none",
              }}
            />
          </div>
          <div className="my-8">
            {error && <p className="mb-2 text-red-500">{error}</p>}
            <p className="text-sm mb-2 text-black">
              Drag and drop video files to upload
            </p>
            <p className="text-sm text-gray-700">
              Your videos will be private until you publish them.
            </p>
          </div>

          <div>
            <input
              hidden
              accept="video/*"
              multiple
              type="file"
              id="youTubePost"
              onChange={handleFileSelect}
            />
            <label
              htmlFor="youTubePost"
              className="bg-black cursor-pointer text-white rounded-full px-4 py-2 hover:bg-gray-900"
            >
              Select files
            </label>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-500 text-center">
          <p>
            By submitting your videos to YouTube, you acknowledge that you agree
            to YouTube's
            <a href="#terms" className="text-blue-600 underline">
              Terms of Service
            </a>
            and
            <a href="#guidelines" className="text-blue-600 underline">
              Community Guidelines
            </a>
            .
          </p>
          <p className="mt-2">
            Uploading illegally filmed content is punishable under law and may
            be removed. Please be sure not to violate others' copyright or
            privacy rights.
            <a href="#learn-more" className="text-blue-600 underline">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <VideoUploadForm
      isOpen={openForm}
      onClose={handleVideoUploadeForm}
      videoFile={selectedVideoFile}
      channelId={channelId}
    />
  );
};

export default VideoUploadModal;
