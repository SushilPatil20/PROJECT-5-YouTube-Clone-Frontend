import React, { lazy } from "react";
import VideoManagementTableSkeleton from "../skeletonComponents/VideoManagementTableSkeleton";
const VideoManagementTable = lazy(() => import("./VideoManagementTable"));

const VideoManagementDashboard = () => {
  return (
    <div className="px-6 md:px-12">
      <h1 className="md:text-2xl font-semibold mt-6 mb-4 text-center md:text-left">
        Video Management Dashboard
      </h1>
      <React.Suspense fallback={<VideoManagementTableSkeleton />}>
        <VideoManagementTable />
      </React.Suspense>
    </div>
  );
};

export default VideoManagementDashboard;
