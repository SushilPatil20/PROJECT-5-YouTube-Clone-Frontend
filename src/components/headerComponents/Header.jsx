import MenuSharp from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeLogo from "./YouTubeLogo";
import { Mic } from "@mui/icons-material";
// import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="border border-gray-500 flex items-center justify-between px-4">
      <section className="flex items-center">
        <MenuSharp
          className="text-gray-600 hover:bg-gray-100 rounded-full p-1"
          fontSize="large"
        />
        <YouTubeLogo />
      </section>
      <section className="w-1/2 flex items-center space-x-2">
        <div className="h-10 flex items-center overflow-hidden w-full">
          <input
            type="text"
            placeholder="Search"
            className="block w-full h-full border border-gray-400 outline-none focus:border focus:shadow-inner focus:shadow-gray-200 focus:border-blue-700 rounded-tl-3xl rounded-bl-3xl px-4 py-4"
          />
          <div
            className="h-full px-4 text-gray-600 flex items-center hover:bg-gray-100
           justify-center rounded-tr-3xl rounded-br-3xl border-t border-b border-r border-gray-400 w-14"
          >
            <SearchIcon fontSize="medium" />
          </div>
        </div>
        <Mic
          fontSize="large"
          className="text-gray-800 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        />
      </section>
      <section>
        <p>Hello brother</p>
      </section>
    </header>
  );
};

export default Header;
