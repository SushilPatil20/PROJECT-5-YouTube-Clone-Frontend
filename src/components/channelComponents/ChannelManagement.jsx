import React, { useEffect, useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import Back from "../Back";
import { useNavigate, useParams } from "react-router";
import { getChannel, updateChannel } from "../../services/channelServices";
import {
  channelUpdateSchema,
  channelBannerSchema,
} from "../../validations/channelSchema";
import * as Yup from "yup";

const ChannelManagement = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();
  const [existingChannel, setExistingChannel] = useState({});
  const [channelData, setChannelData] = useState({
    channelName: "",
    description: "",
    channelBanner: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChannelById = async (chanId) => {
      setLoading(true);
      try {
        const channel = await getChannel(chanId);
        if (channel) {
          setExistingChannel(channel.channel);
          setChannelData({
            channelName: channel.channel.channelName,
            description: channel.channel.description,
            channelBanner: "",
          });
        }
      } catch (error) {
        console.error("Error fetching channel:", error.message);
        setChannelData({});
      } finally {
        setLoading(false);
      }
    };
    fetchChannelById(channelId);
  }, [channelId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChannelData({ ...channelData, [name]: value });
  };

  // Handle banner upload and validation
  const handleBannerUpload = async (e) => {
    const channelBanner = e.target.files[0];
    try {
      await channelBannerSchema.validate({ channelBanner });
      setChannelData({ ...channelData, channelBanner });
      setErrors((prev) => ({ ...prev, channelBanner: "" }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prev) => ({ ...prev, channelBanner: error.message }));
      }
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const validatedData = await channelUpdateSchema.validate(channelData, {
        abortEarly: false,
      });
      await updateChannel(channelId, validatedData);
      setErrors({});
      navigate(`/channel/${existingChannel._id}/editing`);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  // Render error messages
  const renderError = (fieldName) =>
    errors[fieldName] && (
      <div className="text-red-600 text-sm mt-2">{errors[fieldName]}</div>
    );

  return (
    <div className="px-4">
      <h2 className="text-center text-2xl text-gray-800 my-8">
        Manage Your Channel
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl border border-gray-300 mx-auto p-4 pt-3 bg-white shadow-lg rounded-lg"
        >
          <Back
            className="mb-3"
            pathName={`/channel/${existingChannel.handle}`}
          />
          <div className="md:flex md:gap-4">
            {/* Banner Upload */}
            <div className="relative flex justify-center items-center mb-6 md:w-1/2">
              <div className="w-full">
                <div
                  className={`w-full h-48 bg-gray-200 ${
                    !channelData.channelBanner &&
                    "border-2 border-dashed border-gray-600"
                  } rounded-lg overflow-hidden flex items-center justify-center`}
                >
                  {channelData.channelBanner ? (
                    <img
                      src={URL.createObjectURL(channelData.channelBanner)}
                      alt="Channel Banner"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600">Upload Channel Banner</span>
                  )}
                </div>
                {renderError("channelBanner")}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleBannerUpload}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Channel Details */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <TextField
                  name="channelName"
                  value={channelData.channelName}
                  onChange={handleInputChange}
                  label="Channel Name"
                  variant="outlined"
                  fullWidth
                />
                {renderError("channelName")}
              </div>
              <div className="mb-4">
                <TextField
                  name="description"
                  value={channelData.description}
                  onChange={handleInputChange}
                  label="Channel Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
                {renderError("description")}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-between mt-6 items-end">
            {existingChannel.channelBanner && (
              <div>
                <img
                  src={existingChannel.channelBanner}
                  className="h-20 w-32 rounded-md object-cover"
                  alt="Existing Banner"
                />
                <p className="text-sm text-blue-600 mt-2">Existing Banner</p>
              </div>
            )}
            <Button type="submit" variant="contained" color="error">
              Save Changes
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChannelManagement;
