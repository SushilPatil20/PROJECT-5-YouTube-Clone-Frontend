import React from "react";
import { TextField, Avatar, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router";

const CreateChannelPopover = ({ open, onClose }) => {
  if (!open) return null;
  const navigate = useNavigate();

  const handleChannelPage = () => {
    onClose();
    navigate("/channel-page");
  };

  return (
    <div className="fixed -inset-6 flex items-center  justify-center bg-black bg-opacity-25">
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl
       lg:max-w-3xl px-6 py-3 sm:m-8 lg:m-12 flex flex-col items-center text-center overflow-hidden"
        style={{ height: "85%" }}
      >
        {/* Title */}
        <h2 className="text-2xl text-left w-full text-gray-800 font-bold mb-4">
          How you'll appear
        </h2>

        {/* User Avatar */}
        <div className="mt-12 flex items-center justify-center  rounded-full mb-8">
          <img
            draggable="false"
            height={"128px"}
            width={"128px"}
            className="rounded-full block"
            src="https://yt3.ggpht.com/a/default-user=s200-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          {/* <PersonIcon fontSize="large" /> */}
        </div>

        {/* Select Picture Text */}
        <div className="mb-6">
          <label
            htmlFor="channelImage"
            className="text-blue-600 font-roboto font-semibold text-sm cursor-pointer mb-6"
          >
            Select Picture
          </label>
          <input type="file" id="channelImage" className="hidden" />
        </div>

        <div className="mx-auto mb-12 w-4/5 md:w-3/5">
          {/* Channel Name Input */}
          <Box className="w-full mb-4">
            <TextField label="Name" fullWidth variant="outlined" />
          </Box>

          {/* Handle Input */}
          <Box className="w-full">
            <TextField
              label="Handle"
              placeholder="@SushilPatil-h9"
              fullWidth
              variant="outlined"
            />
          </Box>
        </div>

        {/* Agreement Text */}
        <p className="text-xs text-justify text-gray-500 mb-6 w-4/5 md:w-3/5">
          By clicking Create Channel, you agree to YouTube's Terms of Service.
          Changes made to your name and profile picture are visible only on
          YouTube and not other Google services.
          <a href="#learn-more" className="text-blue-600 underline">
            Learn more
          </a>
        </p>

        {/* Actions */}
        <div className="absolute bottom-2 right-8 md:right-1 md:bottom-2 flex justify-end w-full font-roboto gap-2">
          <button
            className="cursor-pointer px-4 py-2 font-semibold font-roboto rounded-3xl hover:bg-gray-200 text-sm"
            onClick={onClose}
            variant="text"
          >
            Cancel
          </button>
          <button
            onClick={handleChannelPage}
            className="cursor-pointer px-4 py-2 rounded-3xl font-roboto hover:bg-blue-100 text-blue-800 text-sm"
            color="primary"
            variant="text"
          >
            Create Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelPopover;
