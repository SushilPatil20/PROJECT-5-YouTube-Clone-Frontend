import { Home, Explore, Subscriptions, Person } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArticleIcon from "@mui/icons-material/Article";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SchoolIcon from "@mui/icons-material/School";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";
import { MenuSharp } from "@mui/icons-material";
import YouTubeLogo from "../headerComponents/YouTubeLogo";

const Sidebar = ({ isOpen, toggleSidebar, isWatchPage }) => {
  return isWatchPage ? (
    <div
      className={`custom-scrollbar bg-white z-20 pb-16 transition-all duration-300 overflow-x-hidden overflow-y-auto ${
        isWatchPage
          ? `fixed top-0 left-0 h-full ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } w-60 px-2`
          : `md:static`
      }`}
    >
      <section className="flex items-center sticky top-0 bg-white">
        <MenuSharp
          className="text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-3 md:ml-3"
          fontSize="large"
          onClick={toggleSidebar}
        />
        <YouTubeLogo />
      </section>
      <div className="pt-4">
        <div
          className={`${
            isOpen
              ? "space-y-1 border-b border-gray-300 pb-4"
              : "flex flex-col items-center space-y-6"
          }`}
        >
          <Link to={"/"}>
            <div
              className={`${
                isOpen
                  ? "flex items-center space-x-4 bg-gray-100 font-semibold px-4 py-2 rounded-lg"
                  : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
              } `}
            >
              <Home />
              <span className={`${isOpen ? "text-sm" : "text-xs"}`}>Home</span>
            </div>
          </Link>
          <div
            className={`${
              isOpen
                ? "flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg"
                : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
            } `}
          >
            <Explore />
            <span className={`${isOpen ? "text-sm" : "text-xs"}`}>Shorts</span>
          </div>
          <div
            className={`${
              isOpen
                ? "flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg"
                : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
            } `}
          >
            <Subscriptions />
            <span className={`${isOpen ? "text-sm" : "text-xs"}`}>
              Subscriptions
            </span>
          </div>

          {isOpen ? null : (
            <div
              className={`${
                isOpen
                  ? "flex items-center space-x-4 bg-gray-100 px-1 py-2 rounded-lg"
                  : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
              } `}
            >
              <Person
                fontSize="medium"
                className="border border-gray-600 rounded-full"
              />
              <span className={`${isOpen ? "text-sm" : "text-xs"}`}>You</span>
            </div>
          )}
        </div>

        {/* Your Channel, History, Playlist, etc */}
        {isOpen && (
          <div className="border-b border-gray-300 pb-4">
            <div className="font-semibold flex items-end text-black hover:bg-gray-100 py-2 px-4 rounded-lg my-2">
              You <ChevronRightIcon fontSize="small" />
            </div>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <HistoryIcon className="text-lg" />
                <span className="text-sm">History</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <PlaylistPlayIcon className="text-lg" />
                <span className="text-sm">Playlist</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <VideoLibraryIcon className="text-lg" />
                <span className="text-sm">Your Videos</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <WatchLaterIcon className="text-lg" />
                <span className="text-sm">Watch Later</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <ThumbUpIcon className="text-lg" />
                <span className="text-sm">Liked Videos</span>
              </div>
            </div>
          </div>
        )}

        {/* Explore Section */}
        {isOpen && (
          <div className="border-b border-gray-300 pb-4">
            <h3 className="font-semibold flex items-end text-black py-2 px-4 rounded-lg my-4">
              Explore
            </h3>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <WhatshotIcon className="text-red-500 text-lg" />
                <span>Trending</span>
              </div>

              {/* Shopping */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <ShoppingCartIcon className="text-green-500 text-lg" />
                <span>Shopping</span>
              </div>

              {/* Music */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <MusicNoteIcon className="text-blue-500 text-lg" />
                <span>Music</span>
              </div>

              {/* Films */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <LocalMoviesIcon className="text-yellow-500 text-lg" />
                <span>Films</span>
              </div>

              {/* Live */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <LiveTvIcon className="text-purple-500 text-lg" />
                <span>Live</span>
              </div>

              {/* Gaming */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SportsEsportsIcon className="text-indigo-500 text-lg" />
                <span>Gaming</span>
              </div>

              {/* News */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <ArticleIcon className="text-gray-500 text-lg" />
                <span>News</span>
              </div>

              {/* Sports */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SportsSoccerIcon className="text-orange-500 text-lg" />
                <span>Sports</span>
              </div>

              {/* Courses */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SchoolIcon className="text-blue-600 text-lg" />
                <span>Courses</span>
              </div>

              {/* Fashion & Beauty */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <CheckroomIcon className="text-pink-500 text-lg" />
                <span>Fashion & Beauty</span>
              </div>

              {/* Podcasts */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <MicIcon className="text-teal-500 text-lg" />
                <span>Podcasts</span>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="border-b border-gray-300 pb-4">
            <h3 className="font-semibold flex items-end text-black py-2 px-4 rounded-lg mt-2">
              More from YouTube
            </h3>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SettingsIcon className="text-gray-500 text-lg" />
                <span>Settings</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <HistoryIcon className="text-gray-500 text-lg" />
                <span>Report History</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <HelpIcon className="text-gray-500 text-lg" />
                <span>Help</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <FeedbackIcon className="text-gray-500 text-lg" />
                <span>Send Feedback</span>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="text-sm text-gray-600 space-y-4 px-4 font-semibold py-4">
            <div className="flex flex-wrap">
              <div className="mx-1">About Press</div>
              <div className="mx-1">Copyright</div>
              <div className="mx-1">Creator</div>
              <div className="mx-1">Advertise</div>
              <div className="mx-1">Developers</div>
            </div>
            <div className="flex flex-wrap">
              <div className="mx-1">Terms</div>
              <div className="mx-1">Privacy Policy & Safety</div>
              <div className="mx-1">How YouTube works</div>
              <div className="mx-1">Test new features</div>
            </div>
            <small className="block mt-6 text-sm font-light">
              © 2024 Sushil Patil
            </small>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div
      className={`custom-scrollbar bg-white z-3 pb-16 fixed h-full md:-translate-x-0 md:pb-0 md:static ${
        isOpen ? "w-60 px-2 translate-x-0" : "w-20 -translate-x-full"
      }  text-gray-800 transition-width duration-300 overflow-x-hidden overflow-y-auto md:px-3`}
    >
      <div className="pt-4">
        <div
          className={`${
            isOpen
              ? "space-y-1 border-b border-gray-300 pb-4 "
              : "flex flex-col items-center space-y-6"
          }`}
        >
          <Link to={"/"}>
            <div
              className={`${
                isOpen
                  ? "flex items-center space-x-4 bg-gray-100 font-semibold px-4 py-2 rounded-lg"
                  : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
              } `}
            >
              <Home />
              <span className={`${isOpen ? "text-sm" : "text-xs"}`}>Home</span>
            </div>
          </Link>
          <div
            className={`${
              isOpen
                ? "flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg"
                : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
            } `}
          >
            <Explore />
            <span className={`${isOpen ? "text-sm" : "text-xs"}`}>Shorts</span>
          </div>
          <div
            className={`${
              isOpen
                ? "flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg"
                : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
            } `}
          >
            <Subscriptions />
            <span className={`${isOpen ? "text-sm" : "text-xs"}`}>
              Subscriptions
            </span>
          </div>

          {isOpen ? null : (
            <div
              className={`${
                isOpen
                  ? "flex items-center space-x-4 bg-gray-100 px-1 py-2 rounded-lg"
                  : "flex flex-col items-center w-fit px-6 py-2 rounded-md hover:bg-gray-100 space-y-1"
              } `}
            >
              <Person
                fontSize="medium"
                className="border border-gray-600 rounded-full"
              />
              <span className={`${isOpen ? "text-sm" : "text-xs"}`}>You</span>
            </div>
          )}
        </div>

        {/* Your Channel, History, Playlist, etc */}
        {isOpen && (
          <div className="border-b border-gray-300 pb-4 ">
            <div className="font-semibold flex items-end text-black hover:bg-gray-100 py-2 px-4 rounded-lg my-2">
              You <ChevronRightIcon fontSize="small" />
            </div>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <HistoryIcon className="text-lg" />
                <span className="text-sm">History</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <PlaylistPlayIcon className="text-lg" />
                <span className="text-sm">Playlist</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <VideoLibraryIcon className="text-lg" />
                <span className="text-sm">Your Videos</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <WatchLaterIcon className="text-lg" />
                <span className="text-sm">Watch Later</span>
              </div>

              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <ThumbUpIcon className="text-lg" />
                <span className="text-sm">Liked Videos</span>
              </div>
            </div>
          </div>
        )}

        {/* Explore Section */}
        {isOpen && (
          <div className="border-b border-gray-300 pb-4">
            <h3 className="font-semibold flex items-end text-black py-2 px-4 rounded-lg my-4">
              Explore
            </h3>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <WhatshotIcon className="text-red-500 text-lg" />
                <span>Trending</span>
              </div>

              {/* Shopping */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <ShoppingCartIcon className="text-green-500 text-lg" />
                <span>Shopping</span>
              </div>

              {/* Music */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <MusicNoteIcon className="text-blue-500 text-lg" />
                <span>Music</span>
              </div>

              {/* Films */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <LocalMoviesIcon className="text-yellow-500 text-lg" />
                <span>Films</span>
              </div>

              {/* Live */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <LiveTvIcon className="text-purple-500 text-lg" />
                <span>Live</span>
              </div>

              {/* Gaming */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SportsEsportsIcon className="text-indigo-500 text-lg" />
                <span>Gaming</span>
              </div>

              {/* News */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <ArticleIcon className="text-gray-500 text-lg" />
                <span>News</span>
              </div>

              {/* Sports */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SportsSoccerIcon className="text-orange-500 text-lg" />
                <span>Sports</span>
              </div>

              {/* Courses */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SchoolIcon className="text-blue-600 text-lg" />
                <span>Courses</span>
              </div>

              {/* Fashion & Beauty */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <CheckroomIcon className="text-pink-500 text-lg" />
                <span>Fashion & Beauty</span>
              </div>

              {/* Podcasts */}
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <MicIcon className="text-teal-500 text-lg" />
                <span>Podcasts</span>
              </div>
            </div>
          </div>
        )}

        {/* More from YouTube */}
        {isOpen && (
          <div className="border-b border-gray-300 pb-4">
            <h3 className="font-semibold flex items-end text-black py-2 px-4 rounded-lg mt-2">
              More from YouTube
            </h3>
            <div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <SettingsIcon className="text-gray-500 text-lg" />
                <span>Settings</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <HistoryIcon className="text-gray-500 text-lg" />
                <span>Report History</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <HelpIcon className="text-gray-500 text-lg" />
                <span>Help</span>
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2">
                <FeedbackIcon className="text-gray-500 text-lg" />
                <span>Send Feedback</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {isOpen && (
          <div className="text-sm text-gray-600 space-y-4 px-4 font-semibold py-4">
            <div className="flex flex-wrap">
              <div className="mx-1">About Press</div>
              <div className="mx-1">Copyright</div>
              <div className="mx-1">Creator</div>
              <div className="mx-1">Advertise</div>
              <div className="mx-1">Developers</div>
            </div>
            <div className="flex flex-wrap">
              <div className="mx-1">Terms</div>
              <div className="mx-1">Privacy Policy & Safety</div>
              <div className="mx-1">How YouTube works</div>
              <div className="mx-1">Test new features</div>
            </div>
            <small className="block mt-6 text-sm font-light">
              © 2024 Sushil Patil
            </small>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
