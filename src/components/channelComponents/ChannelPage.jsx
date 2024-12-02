import React, { useEffect, useState } from "react";
import VideoUploadModal from "../videoComponents/VideoUploadModel.jsx";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slice/modalSlice.js";
import IfNotContent from "../IfNotContent.jsx";
import { getChannelByHandle } from "../../services/channelServices.js";
import { formatTimeAgo } from "../../utils/helpers.js";
import useAuth from "../../customeHooks/useAuth.js";
import Profile from "../../assets/profile-image.png";

const ChannelPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.videoModel.isOpen);
  const { isAuthenticated } = useAuth();
  const handleVideoUploadModal = () => dispatch(toggleModal());
  const [channel, setChannel] = useState({});
  const [videos, setVideos] = useState([]);
  const { channelHandle } = useParams();
  const { user } = useAuth();
  const isOwner =
    user?.user?.channels?.[0] && user?.user?.channels?.[0]._id === channel._id;

  useEffect(() => {
    const fetchChannel = async (channelHandle) => {
      try {
        const channel = await getChannelByHandle(channelHandle);
        setChannel(channel);
        setVideos(channel.videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel(channelHandle);
  }, [channelHandle]);

  return (
    <div className="w-full pb-14 max-w-7xl font-roboto ml-auto">
      {channel.channelBanner && (
        <div className="h-44 w-full md:px-8">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={channel.channelBanner && channel.channelBanner}
            alt={channel.channelName + "-image"}
          />
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4 md:px-8 pt-5">
        {channel.owner && channel.owner.avatar ? (
          <img
            src={channel.owner && channel.owner.avatar}
            alt={channel.owner && channel.owner.name}
            className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover"
          />
        ) : (
          <img src={Profile} className="w-28 h-28  object-cover" />
        )}
        <div>
          <div className="text-center md:text-left mt-2">
            <h2 className="text-4xl  font-semibold ">
              {channel && channel.channelName}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {channel && channel.handle} • {videos && videos.length} videos
            </p>
            <p className="text-gray-500 text-sm mt-2 cursor-pointer">
              More about this channel
              <span className="text-black font-roboto">...more</span>
            </p>
          </div>

          {isAuthenticated && isOwner && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => navigate(`/channel/${channel._id}/editing`)}
                className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200"
              >
                Customise Channel
              </button>
              {videos && videos.length > 0 && (
                <button
                  onClick={() =>
                    navigate(
                      `/channel/${channel.handle}/video-management-dashboard`
                    )
                  }
                  className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200"
                >
                  Manage Videos
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <section>
        {videos.length > 0 ? (
          <>
            <ul className="flex items-center gap-8 my-3 border-b border-gray-200 px-9">
              <li className="border-b-2  border-gray-800 py-1 h-10 font-semibold">
                Videos
              </li>
              <li className="hover:border-b-2  text-gray-500 font-semibold hover:border-gray-700 py-1 h-10">
                Posts
              </li>
            </ul>
            <div className="px-9">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {videos &&
                  videos.map((video) => (
                    <div
                      key={video._id}
                      className="group relative bg-white rounded-md shadow hover:shadow-lg overflow-hidden"
                      onClick={() => navigate(`/watch/${video._id}`)}
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-36 object-cover"
                        />
                      </div>
                      <div className="p-2 space-y-1">
                        <h3 className="text-sm font-semibold truncate">
                          {video.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {video.views} views •{" "}
                          {formatTimeAgo(video.uploadDate)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          isOwner && (
            <div className="text-sm text-center w-1/2 mx-auto mt-12">
              <IfNotContent />
              {isModalOpen && (
                <VideoUploadModal
                  onClose={handleVideoUploadModal}
                  channelId={channel._id}
                />
              )}
              <button
                onClick={handleVideoUploadModal}
                className="cursor-pointer mt-6 text-sm hover:bg-gray-800 bg-black text-white px-4 py-2 rounded-3xl"
              >
                Create
              </button>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ChannelPage;
