import React from "react";
import { Popover, Avatar } from "@mui/material";
import Logout from "@mui/icons-material/Logout";

const ProfilePopover = ({ handleClose, anchorEl, open }) => {
  return (
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
          minwidth: "40%",
          paddingBottom: 1,
          boxShadow: "0 4px 32px 0 rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          margin: "-2.5rem",
        },
      }}
    >
      <div className="space-y-3">
        <div className="flex space-x-3 px-5 py-5 border-b border-gray-200 ">
          <Avatar className="border border-gray-300 w-10 h-10" />
          <div className="flex flex-col -mt-1">
            <div className="-space-y-1">
              <p className="text-lg">Sushil Patil</p>
              <p className="text-sm">sushil.patil.techie@gmail.com</p>
            </div>
            <button
              onClick={handleClose}
              className="text-sm text-left text-blue-800 mt-2"
            >
              Create a channel
            </button>
          </div>
        </div>
        <div className="px-5 py-2 hover:bg-gray-100 space-x-4 cursor-pointer">
          <Logout className="text-gray-600" />{" "}
          <span className="text-sm ">Sign out</span>
        </div>
      </div>
    </Popover>
  );
};

export default ProfilePopover;
