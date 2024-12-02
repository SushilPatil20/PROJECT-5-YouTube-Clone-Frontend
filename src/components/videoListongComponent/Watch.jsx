import React, { useState, useEffect } from "react";
import {
  ThumbUp,
  ThumbDown,
  Share,
  FileDownload,
  MoreVert,
  Delete,
  Edit,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CategoriesListing from "./CategoriesListing";
import { formatCount, formatTimeAgo } from "../../utils/helpers";
import { useNavigate, useParams } from "react-router";
import { useFormValidation } from "../../validations/useFormValidation";
import commentSchema from "../../validations/commentSchema";
import {
  fetchRecommendedVideos,
  getFilteredVideos,
  getSingleVideo,
} from "../../services/videoServices";
import Profile from "../../assets/profile-image.png";
import useAuth from "../../customeHooks/useAuth";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../../services/commentServices";

const WatchPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState({});
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isFocusCommentBox, setIsFocusCommentBox] = useState(false);
  const { register, handleSubmit, errors } = useFormValidation(commentSchema);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 100;
  const { user, userId, isAuthenticated } = useAuth();
  const [authUserChannel, setAuthUserChannel] = useState({});
  const [actionVisibility, setActionVisibility] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category

  const fetchVideo = async (videoId) => {
    if (selectedCategory === "All") {
      const video = await getSingleVideo(videoId);
      setComments(video.video.comments);
      setCurrentVideo(video.video);
      if (user.user && user.user.channels.length > 0) {
        setAuthUserChannel(user.user.channels[0]);
      }
    }
  };

  const getRecommendations = async (videoId) => {
    try {
      if (selectedCategory === "All") {
        const videos = await fetchRecommendedVideos(videoId);
        setRecommendedVideos(videos);
      } else {
        const data = await getFilteredVideos(selectedCategory);
        setRecommendedVideos(data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (commentId, index) => {
    if (!isAuthenticated) return navigate("/signin");
    setEditingCommentId(commentId);
    toggleActionVisibility(index);
  };
  const handleCancelEdit = () => {
    setEditedComment("");
    setEditingCommentId(null);
  };

  const handleSave = async (commentId, index) => {
    try {
      await commentSchema.validate({ editedComment });
      const result = await updateComment(commentId, editedComment);
      if (result.status === 200) {
        handleCancelEdit();
        toggleActionVisibility(index);
        fetchVideo(result.videoId);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchVideo(videoId);
    getRecommendations(videoId);
  }, [videoId, selectedCategory]);

  useEffect(() => {
    if (comments.length > 0) {
      const initialVisibility = comments.map(() => false);
      setActionVisibility(initialVisibility);
    }
  }, [comments]);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const toggleActionVisibility = (index) => {
    setActionVisibility((prev) =>
      prev.map((visible, idx) => (idx === index ? !visible : visible))
    );
  };

  const onCancelComment = () => {
    setIsFocusCommentBox(false);
    setComment("");
  };

  const handleDeleteClick = async (commentId) => {
    try {
      if (commentId) {
        const result = await deleteComment(commentId);
        if (result === 200) {
          fetchVideo(videoId);
          navigate(`/watch/${videoId}`);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const onSubmit = async (comment) => {
    if (user.user.channels.length > 0) {
      if (userId && videoId) {
        const newComment = {
          ...comment,
          userId,
          videoId,
          channelId: authUserChannel && authUserChannel._id,
        };

        try {
          const result = await createComment(newComment);
          if (result === 201) {
            onCancelComment();
            fetchVideo(videoId);
            navigate(`/watch/${videoId}`);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    } else {
      alert("Create a channel first");
      onCancelComment();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-0 sm:px-3 md:px-8 md:pt-6">
      <div className="lg:w-[68%] w-full px-2 md:px-4">
        <div className="w-full h-[250px] sm:h-[390px] md:h-[490px] mb-2 mt-6 relative md:mt-0">
          {currentVideo && (
            <video
              className="w-full outline-none object-cover rounded-md md:rounded-xl h-full"
              src={currentVideo.videoUrl}
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
              {currentVideo.uploader && currentVideo.uploader.avatar ? (
                <img
                  src={currentVideo.uploader.avatar}
                  alt="Channel Name"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <img
                  src={Profile}
                  alt="Channel Name"
                  className="w-11 h-11 rounded-full object-cover"
                />
              )}
              <div className="ml-2">
                <p className="text-lg font-semibold ">
                  {currentVideo.channelId && currentVideo.channelId.channelName}
                  {!currentVideo.channelId && "No channel"}
                </p>
                {currentVideo.channelId && (
                  <p className="text-gray-600 text-sm">
                    {formatCount(currentVideo.channelId.subscribers)}{" "}
                    subscribers
                  </p>
                )}
              </div>
            </div>

            <button className="bg-black cursor-pointer text-white py-2 px-4 hover:bg-gray-800 rounded-3xl text-sm font-semibold">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-2 mt-4 sm:mt-3 md:mt-0 flex-wrap">
            <button className="flex items-center bg-gray-200 rounded-full h-10">
              <div
                onClick={() => setLikes(likes + 1)}
                className="pl-2 h-full bg-gray-100 space-x-2 hover:bg-gray-200 flex items-center justify-center min-w-16 rounded-l-full"
              >
                <ThumbUp fontSize="small" />
                <span className=" text-gray-700">
                  {likes > 0 && (
                    <span className="mx-1">{formatCount(likes)}</span>
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
        <div className="bg-gray-100 w-full min-h-24 mt-4 rounded-md p-2 text-gray-900 text-sm space-y-1">
          <p className="font-semibold ">
            {currentVideo.views && formatCount(currentVideo.views)} views{" "}
            {currentVideo.uploadDate && formatTimeAgo(currentVideo.uploadDate)}
          </p>
          <p>{currentVideo.title}</p>
          <p>
            {isExpanded
              ? currentVideo.description
              : currentVideo.description &&
                currentVideo.description.substring(0, maxDescriptionLength) +
                  "..."}
            <button
              onClick={toggleDescription}
              className="ml-2 text-blue-500 hover:underline"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>
        <div className="mt-6 py-2">
          <h3 className="text-xl font-bold mb-6">
            {currentVideo.comments && formatCount(currentVideo.comments.length)}{" "}
            Comments
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex items-center ">
              {user.user && user.user.avatar ? (
                <img
                  src={user.user.avatar}
                  alt="Channel Name"
                  className="min-w-11 h-11 rounded-full object-cover"
                />
              ) : (
                <img
                  src={Profile}
                  alt="Channel Name"
                  className="w-11 h-11 rounded-full object-cover "
                />
              )}
              <input
                type="text"
                {...register("text")}
                className="block w-full pb-1  ml-4 mr-3  text-sm outline-none border-b border-gray-400 focus:border-b-2 focus:border-b-black"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onFocus={() => setIsFocusCommentBox(true)}
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
                    disabled={!comment || comment.length === 0}
                    className={`px-4 py-2 font-semibold rounded-3xl ${
                      comment && comment.length > 0
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
            {comments.length > 0 &&
              comments.map((comment, index) => (
                <div key={comment._id}>
                  {editingCommentId === comment._id ? (
                    <div key={comment._id} className="w-full">
                      <div>
                        <div className="flex items-center w-full">
                          {comment.userId && comment.userId.avatar ? (
                            <img
                              src={comment.userId && comment.userId.avatar}
                              className="w-11 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <img
                              src={Profile}
                              alt="Channel Name"
                              className="w-11 h-11 rounded-full object-cover"
                            />
                          )}
                          <input
                            type="text"
                            className="block w-full pb-1 ml-4 mr-3 text-sm outline-none border-b border-gray-400 focus:border-b-2 focus:border-b-black"
                            placeholder="Edit comment..."
                            value={
                              !editedComment ? comment.text : editedComment
                            }
                            onChange={(e) => setEditedComment(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-x-2 mt-2 flex justify-end mr-6">
                        <button
                          onClick={() => handleCancelEdit(index)}
                          className="px-3 py-1 text-sm rounded-2xl hover:bg-gray-200  cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          onClick={() => handleSave(comment._id, index)}
                          className="px-3 py-1 text-sm rounded-2xl bg-green-600 text-white cursor-pointer"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={comment._id}
                      className="flex justify-between items-start"
                    >
                      <div className="flex items-start">
                        <img
                          src={comment.userId && comment.userId.avatar}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <p
                            onClick={() => {
                              return navigate(
                                `/channel/${comment.channelId.handle}`
                              );
                            }}
                            className="text-sm font-semibold cursor-pointer hover:underline"
                          >
                            {comment.channelId.handle}
                          </p>
                          <p className="text-sm">{comment && comment.text}</p>
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
                      <div className="relative flex items-center">
                        {actionVisibility[index] && (
                          <div className="flex border absolute space-x-2 p-1 bg-white -left-20 md:-left-24 rounded-md justify-end">
                            {user.user._id === comment.userId._id && (
                              <>
                                <button
                                  className="block h-full"
                                  onClick={() => handleDeleteClick(comment._id)}
                                >
                                  <Delete color="error" fontSize="small" />
                                </button>
                                <span className="border"></span>
                                <button
                                  className="block h-full"
                                  onClick={() =>
                                    handleEditClick(comment._id, index)
                                  }
                                >
                                  <Edit color="primary" fontSize="small" />
                                </button>
                              </>
                            )}
                          </div>
                        )}
                        {user.user && user.user._id === comment.userId._id && (
                          <IconButton
                            onClick={() => toggleActionVisibility(index)}
                          >
                            <MoreVert />
                          </IconButton>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[32%] w-full  px-3 mt-8 md:mt-0">
        <div className="md:-mt-1 mb-2">
          <CategoriesListing
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="space-y-2 pb-4">
          {recommendedVideos.length > 0 ? (
            recommendedVideos.map((video) => (
              <div
                onClick={() => navigate(`/watch/${video._id}`)}
                className="flex space-x-2 cursor-pointer"
                key={video._id}
              >
                <div className="min-w-44 h-24">
                  <img
                    src={video.thumbnailUrl}
                    className="w-full h-full rounded-md hover:rounded-none"
                  />
                </div>
                <div className="w-4/5">
                  <p className="text-sm font-semibold text-black line-clamp-2 no-underline">
                    {video.title}
                  </p>
                  <p className="text-sm text-black no-underline">
                    {video.channelId.channelName}
                  </p>
                  <p className="text-sm text-black no-underline">
                    {formatCount(video.views)} views
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center my-4 px-12">
              No recommendations and category wise videos are available right
              now.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
