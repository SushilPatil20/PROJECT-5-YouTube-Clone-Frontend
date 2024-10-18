import MenuSharp from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeLogo from "./YouTubeLogo";
import { Mic } from "@mui/icons-material";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);

  // Handle window resizing to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 sticky top-0 bg-white z-10">
      {/* Left side: Menu icon and YouTube logo */}
      <section className="flex items-center">
        <MenuSharp
          className="text-gray-600 hover:bg-gray-100 rounded-full p-1 ml-2"
          fontSize="large"
          onClick={toggleSidebar}
        />
        <YouTubeLogo />
      </section>

      {/* Middle section: Search bar or search icon */}
      <section className="w-1/2 flex items-center justify-end space-x-2">
        {/* Show search bar on larger screens */}
        {isMobile ? (
          // Show search icon only on small screens
          <span className="md:hidden">
            <SearchIcon fontSize="medium" className="text-gray-600" />
          </span>
        ) : (
          <div className="h-10 overflow-hidden w-full flex">
            <input
              type="text"
              placeholder="Search"
              className="block w-full h-full border border-gray-400 outline-none focus:border focus:shadow-inner focus:shadow-gray-200 focus:border-blue-700 rounded-tl-3xl rounded-bl-3xl px-4 py-4"
            />
            <div className="h-full px-4 text-gray-600 flex items-center hover:bg-gray-100 justify-center rounded-tr-3xl rounded-br-3xl border-t border-b border-r border-gray-400 w-14">
              <SearchIcon fontSize="medium" />
            </div>
          </div>
        )}

        {/* Mic icon (always visible) */}
        <Mic
          fontSize="large"
          className="text-gray-800 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        />
      </section>

      {/* Right section: Sign in button */}
      <section className="ml-6 mr-2">
        <div className="flex items-center space-x-2">
          <Link to={"/signin"}>
            <div className="flex items-center text-blue-600 space-x-2 px-4 py-2 border rounded-3xl hover:bg-blue-100 hover:border-blue-100 duration-100 min-w-28">
              <Person
                fontSize="medium"
                className="border border-blue-600 rounded-full"
              />
              <span className="text-sm font-semibold">Sign in</span>
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
