import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import * as React from "react";

const LinearProgressLoader = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", height: "2px", backgroundColor: "red" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: "red", // Changing the color of the progress bar
          },
          backgroundColor: "lightgray", // changing background color behind the progress bar
        }}
      />
    </Box>
  );
};

export default LinearProgressLoader;
