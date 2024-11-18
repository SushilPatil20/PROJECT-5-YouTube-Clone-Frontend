import React, { useEffect, useState } from "react";
import { Popover, Avatar } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import CreateChannelPopover from "./CreateChannelPopover";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router";
import useAuth from "../../customeHooks/useAuth";

const ProfilePopover = ({ handleClose, anchorEl, open, onLogout }) => {
  const navigation = useNavigate();
  const [isCreateChannelOpen, setCreateChannelOpen] = useState(false);
  const { user } = useAuth();
  const handleCreateChannelButton = () => {
    setCreateChannelOpen(true);
    handleClose();
  };

  const handleNavigation = () => {
    navigation(`/${user.user.channels[0].handle}`);
    handleClose();
  };

  const handleCreateChannelClose = () => setCreateChannelOpen(false);
  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPopover-paper": {
            paddingBottom: 1,
            boxShadow: "0 4px 32px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            margin: "-2.5rem",
          },
        }}
        {...(!open && { inert: "true" })}
      >
        <div className="space-y-3 min-w-72">
          <div className="flex space-x-3 px-5 py-5 border-b border-gray-200">
            {user.user && user.user.avatar ? (
              <img
                src={user.user.avatar}
                alt={user.user.name}
                className="w-10 h-10 object-cover object-top rounded-full"
              />
            ) : (
              <Avatar className="border border-gray-300 w-10 h-10" />
            )}

            <div className="flex flex-col -mt-1">
              <div className="-space-y-1">
                <p className="text-lg">{user.user && user.user.name}</p>
                <p className="text-sm">{user.user && user.user.email}</p>
              </div>
              {user.user && user.user.channels.length > 0 ? (
                <button
                  onClick={handleNavigation}
                  className="text-sm text-left text-blue-800 mt-2"
                >
                  View your channel
                </button>
              ) : (
                <button
                  onClick={handleCreateChannelButton}
                  className="text-sm text-left text-blue-800 mt-2"
                >
                  Create a channel
                </button>
              )}
            </div>
          </div>
          {user.user && user.user.channels.length > 0 && (
            <div
              className="px-5 py-2 hover:bg-gray-100 space-x-4 cursor-pointer"
              onClick={handleCreateChannelButton}
            >
              {/* <Logout className="text-gray-600" /> */}
              <AddCircle className="text-gray-600" />
              <span className="text-sm ">Create a channel</span>
            </div>
          )}
          <div
            onClick={onLogout}
            className="px-5 py-2 hover:bg-gray-100 space-x-4 cursor-pointer"
          >
            <Logout className="text-gray-600" />
            <span className="text-sm">Sign out</span>
          </div>
        </div>
      </Popover>
      {isCreateChannelOpen && (
        <CreateChannelPopover
          open={isCreateChannelOpen}
          onClose={handleCreateChannelClose}
        />
      )}
    </>
  );
};

export default ProfilePopover;
