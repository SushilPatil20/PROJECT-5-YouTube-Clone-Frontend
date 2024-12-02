import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LinearProgressLoader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Detect page navigation

  useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        const diff = Math.round(Math.random() * 50);
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <Box sx={{ width: "100%", height: "2px", backgroundColor: "lightgray" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: "red", // Changing the color of the progress bar
          },
          backgroundColor: "lightgray", // Changing background color behind the progress bar
        }}
      />
    </Box>
  );
};

export default LinearProgressLoader;
