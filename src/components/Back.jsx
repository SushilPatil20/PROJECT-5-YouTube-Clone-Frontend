import React from "react";
import { back } from "../utils/helpers";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton, Tooltip } from "@mui/material";

const Back = ({ className = "" }) => {
  return (
    <div className={className}>
      <IconButton onClick={back}>
        <Tooltip title="Back" placement="top">
          <ChevronLeftIcon sx={{ fontSize: "30px" }} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default Back;
