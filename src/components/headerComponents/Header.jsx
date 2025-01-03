import MenuSharp from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeLogo from "./YouTubeLogo";
import { Mic } from "@mui/icons-material";
import Person from "@mui/icons-material/Person";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { compontShouldShowOnSignUpAndSignIn } from "../../utils/helpers";
import ProfilePopover from "./ProfilePopover";
import useAuth from "../../customeHooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { useUrlPathName } from "../../customeHooks/useUrlPathName";
import searchStringSchema from "../../validations/searchSchema";

const Header = ({ toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const searchedQuery = urlParams.get("search_query");
  const [search, setSearch] = useState(searchedQuery || "");
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const navigate = useNavigate();
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, user } = useAuth();
  const dispatch = useDispatch();
  const currenUrl = useUrlPathName();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 660);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const searchQuery = async () => {
    try {
      await searchStringSchema.validate({ search });
      // Encode the search query and replace spaces with '+'
      const formattedQuery = encodeURIComponent(search).replace(/%20/g, "+");
      navigate(`/results?search_query=${formattedQuery}`);
    } catch (error) {
      if (error.name === "ValidationError") {
        console.error("Validation Error:", error.message);
        alert(error.message); // Or display this in the UI
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return compontShouldShowOnSignUpAndSignIn(currenUrl) ? (
    <>
      {isSearchClick && isMobile ? (
        <header className="flex items-center justify-between pl-1 bg-white sticky top-0 pr-6 py-2 lg:hidden md:hidden">
          <IconButton
            onClick={() => {
              setIsSearchClick(false);
            }}
          >
            <ArrowBack className="text-black cursor-pointer" />
          </IconButton>
          <div className="h-10 overflow-hidden w-4/5 flex">
            <input
              type="text"
              placeholder="Search"
              className="block w-full h-full border border-gray-400 outline-none focus:border focus:shadow-inner focus:shadow-gray-200 focus:border-blue-700 rounded-tl-3xl rounded-bl-3xl px-4 py-4"
              value={search}
              onChange={handleChange}
              autoFocus
            />
            <div
              onClick={searchQuery}
              className="h-full cursor-pointer px-4 bg-gray-100 text-gray-600 flex items-center hover:bg-gray-200 justify-center rounded-tr-3xl rounded-br-3xl border-t border-b border-r border-gray-400 w-14"
            >
              <SearchIcon fontSize="medium" />
            </div>
          </div>
          <IconButton>
            <Mic fontSize="medium" className="text-black cursor-pointer" />
          </IconButton>
        </header>
      ) : (
        <header className="flex items-center justify-between sticky top-0 bg-white z-10 px-4">
          {/* Left side: Menu icon and YouTube logo */}
          <section className="flex items-center">
            <MenuSharp
              className="text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-1 md:ml-2"
              fontSize="large"
              onClick={toggleSidebar}
            />
            <YouTubeLogo />
          </section>
          <section className="flex items-center md:ml-0 md:w-1/2 md:space-x-2">
            {!isMobile && (
              <div className="h-10 overflow-hidden w-full flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full h-full border border-gray-400 outline-none focus:border focus:shadow-inner focus:shadow-gray-200 focus:border-blue-700 rounded-tl-3xl rounded-bl-3xl px-4 py-4"
                  value={search}
                  onChange={handleChange}
                />
                <div
                  onClick={searchQuery}
                  className="cursor-pointer h-full px-4 text-gray-600 flex items-center hover:bg-gray-100 justify-center rounded-tr-3xl rounded-br-3xl border-t border-b border-r border-gray-400 w-14"
                >
                  <SearchIcon fontSize="medium" />
                </div>
              </div>
            )}
          </section>

          <section className="ml-6 mr-2 flex items-center space-x-2">
            <span
              onClick={() => {
                setIsSearchClick(!isSearchClick);
              }}
              className="md:hidden sm:hidden h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200 p-5"
            >
              <SearchIcon
                fontSize="medium"
                className="text-gray-700 cursor-pointer"
              />
            </span>

            <div className="flex items-center space-x-2">
              {!isAuthenticated ? (
                <Link to={"/signin"}>
                  <div className="flex items-center text-blue-600 space-x-2 px-3 md:px-4 py-2 border rounded-3xl hover:bg-blue-100 hover:border-blue-100 duration-100 w-26 md:w-28">
                    <Person
                      fontSize="small"
                      className="border border-blue-600 rounded-full"
                      sx={{
                        fontSize: {
                          md: "1.3rem",
                        },
                      }}
                    />
                    <span className="text-sm font-semibold">Sign in</span>
                  </div>
                </Link>
              ) : (
                <>
                  <div
                    onClick={handleClick}
                    className="flex items-center cursor-pointer text-blue-600 space-x-2 p-1 rounded-full  hover:bg-blue-100 hover:border-blue-100 duration-100 mr-0 md:mr-4"
                  >
                    <Tooltip title="Profile" placement="bottom">
                      {user.user && user.user.avatar ? (
                        <img
                          src={user.user.avatar}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover object-right"
                        ></img>
                      ) : (
                        <Person
                          fontSize="large"
                          className="border border-blue-600 rounded-full w-8"
                          sx={{
                            fontSize: {
                              md: "2rem",
                            },
                          }}
                        />
                      )}
                    </Tooltip>
                  </div>
                  <ProfilePopover
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                    open={open}
                    onLogout={handleLogout}
                  />
                </>
              )}
            </div>
          </section>
        </header>
      )}
    </>
  ) : (
    <header className="flex cursor-pointer items-center justify-between pl-3 bg-white sticky top-0 pr-6">
      <YouTubeLogo />
    </header>
  );
};

export default Header;
