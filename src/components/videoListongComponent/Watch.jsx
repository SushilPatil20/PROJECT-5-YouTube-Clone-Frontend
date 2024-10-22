import React, { useRef, useState } from "react";
import {
  ThumbUp,
  ThumbDown,
  Share,
  FileDownload,
  MoreVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CategoriesListing from "./CategoriesListing";
import { carts } from "../../utils/helpers";
// import HoverVideoPlayer from "react-hover-video-player";

const WatchPage = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-3 md:px-8 md:pt-6">
      <div className="lg:w-[68%] w-full px-4">
        <div className="w-full md:h-[470px] mb-2 rounded-xl mt-6 relative md:mt-0">
          <video
            ref={videoRef}
            className="w-full outline-none h-full object-cover rounded-xl"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay={true}
          />
        </div>

        <div className="flex items-center justify-between mb-4 flex-wrap">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Channel Name"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-lg font-semibold ">CodeAcademy</p>
                <p className="text-gray-500 text-sm">1.2M views</p>
              </div>
            </div>
            <button className="bg-black cursor-pointer text-white py-2 px-4 hover:bg-gray-800 rounded-3xl text-sm font-semibold">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-2 mt-4 flex-wrap">
            <button className="flex items-center bg-gray-200 rounded-3xl">
              <div className="h-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center w-14 rounded-l-full">
                <ThumbUp fontSize="small" />
              </div>
              <span className="border-l h-3/4 border-gray-400"></span>
              <div className="h-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center w-14 rounded-r-full">
                <ThumbDown fontSize="small" />
              </div>
            </button>

            <button className="flex items-center space-x-2 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-3xl">
              <Share fontSize="small" />
              <span>Share</span>
            </button>

            <button className="md:flex items-center space-x-2 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-3xl">
              <FileDownload fontSize="small" />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6">4,366 Comments</h3>
          <div className="flex items-center pr-2 mb-6">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              className="w-full pb-1 text-sm outline-none border-b border-gray-400 focus:border-b-2 focus:border-b-black ml-4 mr-3"
              placeholder="Add a comment..."
            />
          </div>

          <div className="space-y-8 mt-10">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9IJhVBrz8l52KT562tEmbSAicfFzkTLdKg&s"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-semibold">CodeAcademy</p>
                  <p className="text-sm">Very nice song</p>
                  <div className="flex space-x-4 mt-1">
                    <button className="flex items-center space-x-1 text-sm">
                      <ThumbUp
                        fontSize="small"
                        className="text-gray-300 hover:text-black"
                      />
                      <span>7</span>
                    </button>
                    <button className="flex items-center text-sm">
                      <ThumbDown
                        fontSize="small"
                        className="text-gray-300 hover:text-black"
                      />
                      <span className="ml-2">3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {isOpenDelete && (
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 py-1 font-semibold px-2 rounded">
                    Delete Comment
                  </button>
                )}
                <IconButton onClick={() => setIsOpenDelete(!isOpenDelete)}>
                  <MoreVert />
                </IconButton>
              </div>
            </div>

            {/* Additional Comment */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9IJhVBrz8l52KT562tEmbSAicfFzkTLdKg&s"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-semibold">CodeAcademy</p>
                  <p className="text-sm ">Very nice song</p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 text-sm">
                      <ThumbUp
                        fontSize="small"
                        className="text-gray-300 hover:text-black"
                      />
                      <span>6</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm">
                      <ThumbDown
                        fontSize="small"
                        className="text-gray-300 hover:text-black"
                      />
                      <span className="ml-2">3</span>
                    </button>
                    <button className="hover:bg-gray-200 text-sm px-2 py-1 rounded-xl font-semibold">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {isOpenDelete && (
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 py-1 font-semibold px-2 rounded">
                    Delete Comment
                  </button>
                )}
                <IconButton onClick={() => setIsOpenDelete(!isOpenDelete)}>
                  <MoreVert />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Related Videos */}
      <div className="md:w-[32%] w-full px-3 mt-8 md:mt-0">
        <div className="md:-mt-1 mb-2">
          <CategoriesListing />
        </div>
        <div className="space-y-4 pb-4">
          {carts.map((video, index) => (
            <div key={index} className="flex space-x-2">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-44 h-24 rounded"
              />
              <div>
                <p className="text-sm font-semibold line-clamp-2">
                  {video.title}
                </p>
                <p className="text-sm text-gray-500">{video.channel}</p>
                <p className="text-sm text-gray-500">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
