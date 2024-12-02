import React, { useEffect, useState } from "react";
import CategoriesListing from "./CategoriesListing";
import { useNavigate } from "react-router-dom";
import { getAllVideos, getFilteredVideos } from "../../services/videoServices";
import { formatCount, formatTimeAgo } from "../../utils/helpers";
import HoverVideoPlayer from "react-hover-video-player";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoListing = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]); // Store fetched videos
  const [loading, setLoading] = useState(false); // Loader state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        setLoading(true);
        if (selectedCategory === "All") {
          const data = await getAllVideos();
          setVideos(data.videos);
        } else {
          const data = await getFilteredVideos(selectedCategory);
          setVideos(data.videos);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllVideos();
  }, [selectedCategory]);

  // Render Skeleton Loader
  const renderSkeletons = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="min-h-[300px]">
        <Skeleton height={208} className="rounded-lg w-full" />
        <div className="py-2">
          <Skeleton height={20} width="70%" />
          <Skeleton height={15} width="50%" />
        </div>
      </div>
    ));
  };

  return (
    <div className="px-4 md:px-6 relative">
      <CategoriesListing
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 gap-4">
          {renderSkeletons()}
        </section>
      ) : videos.length === 0 ? (
        <p className="text-2xl font-semibold text-gray-600 text-center mt-16">
          No videos available for this category.
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 gap-4">
          {videos.map((video) => (
            <div
              onClick={() => navigate(`/watch/${video._id}`)}
              key={video._id}
              className="min-h-[300px]"
            >
              <div className="min-h-72 cursor-pointer md:w-full md:mb-4">
                <HoverVideoPlayer
                  className="w-full cursor-pointer"
                  videoSrc={video.videoUrl}
                  pausedOverlay={
                    <img
                      className="rounded-lg h-52 object-cover w-full hover:rounded-none"
                      src={video.thumbnailUrl}
                      alt={video.title}
                      loading="lazy"
                    />
                  }
                  loadingOverlay={
                    <div className="rounded-lg h-52 w-full bg-gray-300 animate-pulse"></div>
                  }
                  videoClassName="rounded-lg h-52 object-cover w-full hover:rounded-none"
                />
                <div className="py-1 space-y-1">
                  <p className="font-semibold line-clamp-1">{video.title}</p>
                  <small className="text-gray-600 block">
                    {formatCount(video.views)} views •{" "}
                    {formatTimeAgo(video.uploadDate)}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default VideoListing;
