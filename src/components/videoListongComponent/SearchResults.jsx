import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchSearchVideo } from "../../services/videoServices";
import { formatTimeAgo } from "../../utils/helpers";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async (query) => {
      try {
        const result = await fetchSearchVideo(query);
        if (result.serverError) {
          return setServerError(result.serverError);
        }
        setServerError("");
        setVideos(result.videos);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos(query);
  }, [query]);
  return (
    <div className="p-4">
      {serverError && (
        <p className="text-xl md:text-4xl text-center mt-16 md:font-bold">
          {serverError} for : {query && query}
        </p>
      )}
      <div className="space-y-4 mt-4">
        {videos.length > 0 &&
          videos.map((video) => (
            <div
              onClick={() => navigate(`/watch/${video._id}`)}
              key={video._id}
              className="flex h-auto cursor-pointer"
            >
              <div className="w-40 min-w-64 md:w-[42vw] mr-4 h-full bg-red-500 rounded-2xl">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full md:h-72 object-cover object-left-bottom rounded-2xl hover:rounded-none hover:duration-150 "
                />
              </div>

              <div className="w-2/3">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600 w-4/5 line-clamp-1">
                  {video.description}
                </p>
                <div className="flex items-center my-2 space-x-2">
                  <img
                    src={video.uploader.avatar}
                    alt={video.channelId.channelName}
                    className="h-5 w-5 rounded-full object-cover object-center"
                  />
                  <p>{video.channelId.channelName}</p>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    {video.views} views · {formatTimeAgo(video.uploadDate)}
                  </p>
                  <p className="font-medium text-gray-600">{video.channel}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
