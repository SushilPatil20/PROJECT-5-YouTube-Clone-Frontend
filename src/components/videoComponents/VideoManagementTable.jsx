import React, { useCallback, useEffect, useState } from "react";
import { Edit, Delete } from "@mui/icons-material";
import PaginationControls from "./PaginationControls";
import { Tooltip } from "@mui/material";
import { formatCount, formatToDDMMYYYY } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slice/modalSlice";
import VideoUploadModal from "./VideoUploadModel";
import { useNavigate, useParams } from "react-router";
import Back from "../Back";
import IfNotContent from "../IfNotContent";
import { deleteVideo, getAuthUserVideos } from "../../services/videoServices";
import useAuth from "../../customeHooks/useAuth";

const VideoManagementTable = () => {
  const { handle } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.videoModel.isOpen);
  const handleVideoUploadModal = () => dispatch(toggleModal());
  const [videos, setVideos] = useState([]);
  const { userId } = useAuth();

  const fetchAuthUserVideos = async (userId) => {
    const result = await getAuthUserVideos(userId);
    if (result.videos) {
      setVideos(result.videos);
    }
  };

  useEffect(() => {
    fetchAuthUserVideos(userId);
  }, [userId, isModalOpen]);

  // Memoize handleDeleteClick to avoid unnecessary re-creations
  const handleDeleteClick = useCallback(
    async (videoId) => {
      if (videoId) {
        const result = await deleteVideo(videoId);
        fetchAuthUserVideos(userId);
        if (result && (await result.status) === 200) {
          navigate(`/channel/${handle}/video-management-dashboard`);
        }
      }
    },
    [userId]
  );

  const videosPerPage = 5;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="max-w-7xl">
      <div className="flex justify-between items-center">
        <Back className="-ml-1 mb-4" pathName={`/channel/${handle}`} />
        {videos.length > 0 && (
          <div>
            <button
              onClick={handleVideoUploadModal}
              className="text-blue-500 text-sm cursor-pointer"
            >
              Upload New Video
            </button>
          </div>
        )}
      </div>
      {videos.length > 0 ? (
        <div className="overflow-x-auto h-96 overflow-y-scroll no-scrollbar border">
          <table className="w-full  bg-white relative">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Video
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Date
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Views
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Comments
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Likes
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Dislikes
                </th>
                <th className="p-2 text-sm font-semibold border-b md:p-3 md:font-bold md:text-base">
                  Action's
                </th>
              </tr>
            </thead>
            <tbody>
              {currentVideos.map((video) => (
                <tr key={video._id}>
                  <td className="p-3 text-center border-b min-w-32">
                    <img
                      src={video.thumbnailUrl}
                      className="w-26 h-14 block mx-auto rounded-md object-cover"
                      controls={false}
                      muted
                      loop
                    />
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {formatToDDMMYYYY(video.uploadDate)}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {video.views}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {video.comments.length}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {formatCount(video.likes)}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {formatCount(video.dislikes)}
                  </td>
                  <td className="p-2 md:p-3 space-x-2 text-center border-b z-10 min-w-32">
                    <Tooltip
                      onClick={() =>
                        navigate(
                          `/channel/${video.channelId?.handle}/video/${video._id}/editing`
                        )
                      }
                      title="Edit"
                      placement="top"
                      className="hover:bg-gray-200  rounded-full p-2"
                      sx={{
                        fontSize: "35px",
                      }}
                    >
                      <Edit color="primary" />
                    </Tooltip>
                    <Tooltip
                      onClick={() => handleDeleteClick(video._id)}
                      title="Delete"
                      placement="top"
                      className="hover:bg-gray-200 rounded-full p-2"
                      sx={{
                        fontSize: "35px",
                      }}
                    >
                      <Delete color="error" />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center flex-col text-center">
          <IfNotContent />
          <button
            onClick={handleVideoUploadModal}
            className="cursor-pointer mt-6 text-sm hover:bg-gray-800 bg-black text-white px-4 py-2 rounded-3xl"
          >
            Create
          </button>
        </div>
      )}

      {videos.length > 0 && (
        <PaginationControls
          totalItems={videos.length}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {isModalOpen && (
        <VideoUploadModal
          isOpen={isModalOpen}
          onClose={handleVideoUploadModal}
          channelId={currentVideos[0].channelId._id}
        />
      )}
    </div>
  );
};

export default VideoManagementTable;
