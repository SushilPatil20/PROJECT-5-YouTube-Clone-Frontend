import React, { useState, useEffect } from "react";
import {
  ThumbUp,
  ThumbDown,
  Share,
  FileDownload,
  MoreVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CategoriesListing from "./CategoriesListing";
import { carts, comments, formatLikesCount } from "../../utils/helpers";
import { useNavigate, useParams } from "react-router";
import { useFormValidation } from "../../validations/useFormValidation";
import commentSchema from "../../validations/commentSchema";

const WatchPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState({});
  const [likes, setLikes] = useState(0);
  const [isFocusCommentBox, setIsFocusCommentBox] = useState(false);
  const { register, handleSubmit, errors } = useFormValidation(commentSchema);
  const [comment, setComment] = useState({ comment: "", author: null });

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const onCancelComment = () => {
    setIsFocusCommentBox(false);
    setComment({ ...comment, ["comment"]: "" });
  };

  const onSubmit = (comment) => {
    console.log(comment);
  };

  useEffect(() => {
    const video = carts.find((video) => video.id == videoId);
    setCurrentVideo(video);
  }, [videoId]);
  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-0 sm:px-3 md:px-8 md:pt-6">
      <div className="lg:w-[68%] w-full px-2 md:px-4">
        <div className="w-full md:h-[470px] mb-2 mt-6 relative md:mt-0">
          {currentVideo && (
            <video
              className="w-full outline-none h-full object-cover rounded-md md:rounded-xl"
              src={currentVideo.url}
              controls
              autoPlay={true}
            />
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <h2 className="line-clamp-1 text-xl font-semibold mb-3 w-full">
            {currentVideo.title}
          </h2>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Channel Name"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-lg font-semibold ">{currentVideo.channel}</p>
                <p className="text-gray-500 text-sm">{currentVideo.views}</p>
              </div>
            </div>
            <button className="bg-black cursor-pointer text-white py-2 px-4 hover:bg-gray-800 rounded-3xl text-sm font-semibold">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-2 mt-4 sm:mt-0 md:mt-0 flex-wrap">
            <button className="flex items-center bg-gray-200 rounded-full h-10">
              <div
                onClick={() => setLikes(likes + 1)}
                className="pl-2 h-full bg-gray-100 space-x-2 hover:bg-gray-200 flex items-center justify-center min-w-16 rounded-l-full"
              >
                <ThumbUp fontSize="small" />
                <span className=" text-gray-700">
                  {likes > 0 && (
                    <span className="mx-1">{formatLikesCount(likes)}</span>
                  )}
                </span>
              </div>
              <span className="border-l h-3/4 border-gray-400"></span>
              <div className="h-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center min-w-16 rounded-r-full">
                <ThumbDown fontSize="small" />
              </div>
            </button>

            <button className="flex items-center space-x-2 text-sm h-10 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-full">
              <Share fontSize="small" />
              <span>Share</span>
            </button>

            <button className="md:flex items-center space-x-2 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 sm:mt-0 md:mt-0 rounded-3xl">
              <FileDownload fontSize="small" />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6">
            {formatLikesCount(comments.length)} Comments
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center pr-2 ">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                {...register("comment")}
                className="block w-full pb-1 text-sm outline-none border-b border-gray-400 focus:border-b-2 focus:border-b-black ml-4 mr-3"
                placeholder="Add a comment..."
                value={comment.comment}
                onChange={handleCommentChange}
                onFocus={() => setIsFocusCommentBox(true)}
              />
              <input
                type="text"
                className="hidden"
                {...register("author")}
                value={"Sushil"}
              />
            </div>
            {isFocusCommentBox && (
              <div className="flex justify-between items-center text-right mr-5 space-x-2 text-sm">
                <p className="text-red-600 text-sm ">
                  {errors.comment && errors.comment.message}
                </p>
                <div className="space-x-2">
                  <button
                    onClick={onCancelComment}
                    className="hover:bg-gray-200 px-4 py-2 rounded-3xl font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!comment.comment || comment.comment.length === 0}
                    className={`px-4 py-2 font-semibold rounded-3xl ${
                      comment.comment && comment.comment.length > 0
                        ? "bg-blue-600 text-white cursor-pointer"
                        : "bg-gray-200  cursor-default text-gray-400"
                    }`}
                  >
                    Comment
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="space-y-8 mt-10">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex justify-between items-start"
              >
                <div className="flex items-start">
                  <img
                    src={comment.profileImage}
                    alt={comment.channel}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-semibold">{comment.channel}</p>
                    <p className="text-sm">{comment.comment}</p>
                    <div className="flex space-x-4 mt-1">
                      <button className="flex items-center space-x-1 text-sm">
                        <ThumbUp
                          fontSize="small"
                          className="text-gray-300 hover:text-black"
                        />
                        <span>{comment.likse}</span>
                      </button>
                      <button className="flex items-center text-sm">
                        <ThumbDown
                          fontSize="small"
                          className="text-gray-300 hover:text-black"
                        />
                        <span className="ml-2">{comment.dislikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-[32%] w-full px-3 mt-8 md:mt-0">
        <div className="md:-mt-1 mb-2">
          <CategoriesListing />
        </div>
        <div className="space-y-2 pb-4">
          {carts.map((video, index) => (
            <div
              onClick={() => navigate(`/watch/${video.id}`)}
              key={index}
              className="flex space-x-2 cursor-pointer"
            >
              {/* <video
                  ref={videoRef}
                  className="w-44 h-24 rounded"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                /> */}
              <img src={video.thumbnail} className="w-44 h-24 rounded" />
              <div>
                <p className="text-sm font-semibold text-black line-clamp-2 no-underline">
                  {video.title}
                </p>
                <p className="text-sm text-black no-underline">
                  {video.channel}
                </p>
                <p className="text-sm text-black no-underline">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
