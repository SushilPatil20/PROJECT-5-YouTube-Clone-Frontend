import React, { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";
import PaginationControls from "./PaginationControls";
import { Tooltip } from "@mui/material";
import { carts, formatLikesCount } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slice/modalSlice";
import VideoUploadModal from "./VideoUploadModel";
import { useNavigate } from "react-router";
import Back from "../Back";
import IfNotContent from "../IfNotContent";

const VideoManagementTable = () => {
  // const carts = [];
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.videoModel.isOpen);
  const handleVideoUploadModal = () => dispatch(toggleModal());

  const handleDeleteClick = (videoId) => {
    onVideoDelete(videoId);
  };
  const videosPerPage = 5;
  const totalPages = Math.ceil(carts.length / videosPerPage);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = carts.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="max-w-7xl">
      <div className="flex justify-between items-center">
        <Back />
        {carts.length > 0 && (
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
      {carts.length > 0 ? (
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
                <tr key={video.id}>
                  <td className="p-3 text-center border-b min-w-32">
                    <img
                      src={video.thumbnail}
                      className="w-26 h-14 block mx-auto rounded-md"
                      controls={false}
                      muted
                      loop
                    />
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {video.uploadDate}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {video.views}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {video.comments.length}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {formatLikesCount(video.likes)}
                  </td>
                  <td className="p-2 md:p-3 text-center border-b min-w-32">
                    {formatLikesCount(video.dislikes)}
                  </td>
                  <td className="p-2 md:p-3 space-x-2 text-center border-b z-10 min-w-32">
                    <Tooltip
                      onClick={() => navigate(`/video-edit-page/${video.id}`)}
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
                      onClick={() => handleDeleteClick(video.id)}
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

      {carts.length > 0 && (
        <PaginationControls
          totalItems={carts.length}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {isModalOpen && (
        <VideoUploadModal
          isOpen={isModalOpen}
          onClose={handleVideoUploadModal}
        />
      )}
    </div>
  );
};

export default VideoManagementTable;
