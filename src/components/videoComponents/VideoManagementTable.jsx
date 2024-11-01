import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import PaginationControls from "./PaginationControls";
import { Tooltip } from "@mui/material";
import { carts, formatLikesCount } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/slice/modalSlice";
import VideoUploadModal from "./VideoUploadModel";
import { useNavigate } from "react-router";
import Back from "../Back";
import IfNotContent from "../IfNotContent";

// pagination
// border content

const VideoManagementTable = ({ videosData, onVideoUpdate, onVideoDelete }) => {
  // const carts = [];
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.videoModel.isOpen);
  const handleVideoUploadModal = () => dispatch(toggleModal());

  useEffect(() => {
    setFilteredVideos(videosData);
  }, [videosData]);

  const handleDeleteClick = (videoId) => {
    onVideoDelete(videoId);
  };
  const videosPerPage = 5;
  const totalPages = Math.ceil(carts.length / videosPerPage);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = carts.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="max-w-7xl  px-6">
      <div className="flex justify-between items-center">
        <Back />
        <div>
          <button
            onClick={handleVideoUploadModal}
            className="text-blue-500 text-sm cursor-pointer"
          >
            Upload New Video
          </button>
        </div>
      </div>
      {carts.length > 0 ? (
        <div className="overflow-x-auto h-96 overflow-y-scroll no-scrollbar border">
          <table className="min-w-full  bg-white relative">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-3 border-b">Video</th>
                <th className="p-3 border-b">Date</th>
                <th className="p-3 border-b">Views</th>
                <th className="p-3 border-b">Comments</th>
                <th className="p-3 border-b">Likes</th>
                <th className="p-3 border-b">Dislikes</th>
                <th className="p-3 border-b">Action's</th>
              </tr>
            </thead>
            <tbody>
              {currentVideos.map((video) => (
                <tr key={video.id}>
                  <td className="p-3 text-center border-b">
                    <img
                      src={video.thumbnail}
                      className="w-26 h-14 block mx-auto rounded-md"
                      controls={false}
                      muted
                      loop
                    />
                  </td>
                  <td className="p-3 text-center border-b">
                    {video.uploadDate}
                  </td>
                  <td className="p-3 text-center border-b">{video.views}</td>
                  <td className="p-3 text-center border-b">
                    {video.comments.length}
                  </td>
                  <td className="p-3 text-center border-b">
                    {formatLikesCount(video.likes)}
                  </td>
                  <td className="p-3 text-center border-b">
                    {formatLikesCount(video.dislikes)}
                  </td>
                  <td className="p-3 space-x-2 text-center border-b z-10">
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
        </div>
      )}

      {carts.length > 0 && (
        <PaginationControls
          totalItems={filteredVideos.length}
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

      {/* Video Action Modal */}
      {/* {showModal && (
        <VideoActionModal
          open={showModal}
          onClose={() => setShowModal(false)}
          video={selectedVideo}
          onSave={onVideoUpdate}
        />
      )} */}
    </div>
  );
};

export default VideoManagementTable;
