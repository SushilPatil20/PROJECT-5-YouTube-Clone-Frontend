import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Back from "./Back";

const ChannelManagement = () => {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [channelBanner, setChannelBanner] = useState(null);

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChannelBanner(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="px-4">
      <h2 className="text-center text-2xl text-gray-800 my-8">
        Manage Your Channel
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl border border-gray-300 mx-auto p-4 pt-3 bg-white shadow-lg rounded-lg "
      >
        <Back className="mb-3" />
        <div className="md:flex md:gap-4">
          {/* Banner Upload */}
          <div className="relative flex justify-center items-center mb-6 md:w-1/2">
            <div
              className={`w-full h-48 bg-gray-200 ${
                !channelBanner && "border-2 border-dashed border-gray-600"
              } rounded-lg overflow-hidden flex items-center justify-center`}
            >
              {channelBanner ? (
                <img
                  src={channelBanner}
                  alt="Channel Banner"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-600">Upload Channel Banner</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <div className="md:w-1/2">
            {/* Channel Name */}
            <div className="mb-4">
              <TextField
                label="Channel Name"
                className="z-0"
                variant="outlined"
                fullWidth
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                placeholder="Enter Channel Name"
              />
            </div>

            {/* Channel Description */}
            <div className="mb-4">
              <TextField
                label="Channel Description"
                variant="outlined"
                className="z-0"
                fullWidth
                multiline
                rows={4}
                value={channelDescription}
                onChange={(e) => setChannelDescription(e.target.value)}
                placeholder="Describe your channel"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button variant="contained" color="error">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChannelManagement;
