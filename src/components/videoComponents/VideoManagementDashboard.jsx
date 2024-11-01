import React, { useState, useEffect } from "react";
import VideoManagementTable from "./VideoManagementTable";
// import VideoActionModal from './VideoActionModal';
// import FilterBar from './FilterBar';

const VideoManagementDashboard = () => {
  const [videosData, setVideosData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos data on load
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // API call to fetch videos (e.g., await fetch('/api/videos'))
    // const videos = await fetch("/api/videos").then((res) => res.json());
    // setVideosData(videos);
  };

  // Handle video creation
  const handleVideoCreate = async (newVideo) => {
    // API call to add new video
    // const createdVideo = await fetch("/api/videos", {
    //   method: "POST",
    //   body: JSON.stringify(newVideo),
    // }).then((res) => res.json());
    // setVideosData([...videosData, createdVideo]);
    // setShowModal(false);
  };

  // Handle video editing
  const handleVideoEdit = async (updatedVideo) => {
    // API call to update video
    // await fetch(`/api/videos/${updatedVideo.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(updatedVideo),
    // });
    // setVideosData(
    //   videosData.map((video) =>
    //     video.id === updatedVideo.id ? updatedVideo : video
    //   )
    // );
    // setShowModal(false);
  };

  // Handle video deletion
  const handleVideoDelete = async (videoId) => {
    // API call to delete video
    // await fetch(`/api/videos/${videoId}`, { method: "DELETE" });
    // setVideosData(videosData.filter((video) => video.id !== videoId));
  };

  // Open modal for new or existing video
  const openModal = (video = null) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Video Management Dashboard
      </h1>
      {/* Table for managing videos */}
      <VideoManagementTable
        videosData={videosData}
        onVideoDelete={handleVideoDelete}
        onVideoEdit={openModal} // Opens modal with selected video
      />

      {/* Video modal for creating/editing videos */}
      {showModal && (
        <VideoActionModal
          open={showModal}
          onClose={() => setShowModal(false)}
          video={selectedVideo}
          onSave={selectedVideo ? handleVideoEdit : handleVideoCreate}
        />
      )}
    </div>
  );
};

export default VideoManagementDashboard;
