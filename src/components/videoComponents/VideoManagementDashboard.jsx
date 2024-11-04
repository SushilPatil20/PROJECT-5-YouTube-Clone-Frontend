import React, { useState, useEffect } from "react";
import VideoManagementTable from "./VideoManagementTable";

const VideoManagementDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Video Management Dashboard
      </h1>
      <VideoManagementTable />
    </div>
  );
};

export default VideoManagementDashboard;
