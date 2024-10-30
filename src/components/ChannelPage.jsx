import React, { useState } from "react";
import VideoUploadModal from "../components/videoComponents/VideoUploadModel";

const ChannelPage = () => {
  const [videoUploadModel, setVideoUploadModel] = useState(false);

  const handleVideoUploadeModel = () => {
    !videoUploadModel ? setVideoUploadModel(true) : setVideoUploadModel(false);
  };

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
            <button className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200">
              Customise Channel
            </button>
            <button className="text-sm bg-gray-100 font-semibold text-gray-800 rounded-3xl px-4 py-2 hover:bg-gray-200">
              Manage Videos
            </button>
          </div>
        </div>
      </div>
      <section>
        <ul className="flex items-center gap-8 my-3 border-b border-gray-200 px-9">
          <li className="border-b-2  border-gray-800 py-1 h-10 font-semibold">
            Videos
          </li>
          <li className="hover:border-b-2  text-gray-500 font-semibold hover:border-gray-700 py-1 h-10">
            Posts
          </li>
        </ul>

        <div className="text-sm text-center w-1/2 mx-auto mt-12">
          <img
            src="https://www.gstatic.com/youtube/img/channels/core_channel_no_activity.svg"
            className="w-36 h-36 block mx-auto"
          />
          <p className="font-semibold my-2 text-gray-900">
            Create content on any device
          </p>
          <p>
            Upload and record at home or on the go. <br /> Everything you make
            public will appear here.
          </p>
          {videoUploadModel && (
            <VideoUploadModal
              isOpen={videoUploadModel}
              onClose={handleVideoUploadeModel}
            />
          )}

          <button
            onClick={handleVideoUploadeModel}
            className="cursor-pointer mt-6 text-sm hover:bg-gray-800 bg-black text-white px-4 py-2 rounded-3xl"
          >
            Create
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChannelPage;
