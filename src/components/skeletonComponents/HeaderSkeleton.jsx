import React from "react";
import { Skeleton } from "@mui/material";

const HeaderSkeleton = () => {
  return (
    <div className="h-16 flex items-center mr-10">
      <Skeleton
        variant="circular"
        width={35}
        height={35}
        className="mb-2 ml-auto"
      />
    </div>
  );
};

export default HeaderSkeleton;
