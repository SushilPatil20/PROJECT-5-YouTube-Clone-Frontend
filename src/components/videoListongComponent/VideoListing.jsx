import React, { useCallback, useEffect, useRef, useState } from "react";
import CategoriesListing from "./CategoriesListing";
import { useNavigate } from "react-router-dom";
import { getAllVideos } from "../../services/videoServices";
import { formatCount, formatTimeAgo } from "../../utils/helpers";

const VideoListing = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]); // Store fetched videos
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        setLoading(true);
        const data = await getAllVideos();
        setVideos(data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllVideos();
  }, []);

  return (
    <div className="px-4 md:px-6 relative">
      <CategoriesListing />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 gap-4">
        {videos.map((video) => (
          <div
            onClick={() => navigate(`/watch/${video._id}`)}
            key={video._id}
            className="min-h-[300px]"
          >
            <div className="min-h-72 cursor-pointer md:w-full md:mb-4">
              <div>
                {loading ? (
                  <div className="skeleton h-52 w-full rounded-lg bg-gray-300"></div>
                ) : (
                  <img
                    className="rounded-lg h-52 object-cover w-full"
                    src={video.thumbnailUrl}
                    alt={video.title}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="py-3 space-y-1">
                <p
                  className="md:text-sm font-semibold line-clamp-1 h-[20px]" // Ensures consistent title height
                >
                  {video.title}
                </p>
                <small className="text-gray-600">
                  {formatCount(video.views)} views •{" "}
                  {formatTimeAgo(video.uploadDate)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideoListing;
