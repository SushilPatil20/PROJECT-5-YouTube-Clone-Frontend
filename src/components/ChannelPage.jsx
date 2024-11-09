import React from "react";
import VideoUploadModal from "../components/videoComponents/VideoUploadModel";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slice/modalSlice";
import IfNotContent from "./IfNotContent";
// import { carts } from "../utils/helpers";

const ChannelPage = () => {
  const carts = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.videoModel.isOpen);
  const handleVideoUploadModal = () => dispatch(toggleModal());

  return (
    <div className="w-full  max-w-7xl font-roboto ml-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4 md:px-8 pt-5">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_mtg4UGhiEdVoaEhsTE0rVuEIp9qIl8xmiFBQZZcpAmrEc=s160-c-k-c0x00ffffff-no-rj"
          alt="Channel Profile"
          className="w-28 h-28 md:w-40 md:h-40  rounded-full object-cover"
        />

        <div>
          <div className="text-center md:text-left mt-2">
            <h2 className="text-4xl  font-semibold ">Sushil Patil</h2>
            <p className="text-gray-600 text-sm mt-1">
              @sushilpatil9447 • 3 videos
            </p>
            <p className="text-gray-500 text-sm mt-2 cursor-pointer">
              More about this channel
              <span className="text-black font-roboto">...more</span>
            </p>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => navigate("/channel-management-dashboard")}
              className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200"
            >
              Customise Channel
            </button>
            <button
              onClick={() => navigate("/video-management-dashboard")}
              className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200"
            >
              Manage Videos
            </button>
          </div>
        </div>
      </div>
      <section>
        {carts.length > 0 ? (
          <>
            <ul className="flex items-center gap-8 my-3 border-b border-gray-200 px-9">
              <li className="border-b-2  border-gray-800 py-1 h-10 font-semibold">
                Videos
              </li>
              <li className="hover:border-b-2  text-gray-500 font-semibold hover:border-gray-700 py-1 h-10">
                Posts
              </li>
            </ul>
            <p>Content</p>
          </>
        ) : (
          <div className="text-sm text-center w-1/2 mx-auto mt-12">
            <IfNotContent />
            {isModalOpen && (
              <VideoUploadModal
                isOpen={isModalOpen}
                onClose={handleVideoUploadModal}
              />
            )}
            <button
              onClick={handleVideoUploadModal}
              className="cursor-pointer mt-6 text-sm hover:bg-gray-800 bg-black text-white px-4 py-2 rounded-3xl"
            >
              Create
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ChannelPage;
