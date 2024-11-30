import React from "react";
import { back } from "../utils/helpers";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";

const Back = ({ className = "", pathName = "/" }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <IconButton onClick={() => navigate(pathName)}>
        <Tooltip title="Back" placement="top">
          <ChevronLeftIcon sx={{ fontSize: "30px" }} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

// onClick={back}

export default Back;
