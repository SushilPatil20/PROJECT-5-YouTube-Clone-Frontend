import React, { useRef, useState } from "react";
import Header from "./components/headerComponents/Header";
import { Outlet } from "react-router";
import Sidebar from "./components/sideBarComponent/SideBar";
import { getUrlPathName } from "./utils/helpers.js";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { compontShouldShowOnSignUpAndSignIn } from "./utils/helpers.js";
import { useUrlPathName } from "./customeHooks/useUrlPathName.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./redux/slice/sideBarSlice.js";

function App() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const containerRef = useRef(null);
  const isWatchPage = getUrlPathName().includes("watch");
  const currenUrl = useUrlPathName();

  const handleSideBar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header toggleSidebar={handleSideBar} className="flex-shrink-0" />
        <main className="flex flex-1 overflow-hidden relative">
          {compontShouldShowOnSignUpAndSignIn(currenUrl) && (
            <Sidebar
              isOpen={isSidebarOpen}
              toggleSidebar={handleSideBar}
              isWatchPage={isWatchPage}
            />
          )}

          {/* -------------------------------------------------- Backdrop for watch page --------------------------------------------------*/}
          {isWatchPage && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={handleSideBar} // -------------------------------------------------- Close sidebar when clicked outside
            ></div>
          )}

          <div ref={containerRef} className="flex-1 h-full overflow-y-auto ">
            <ScrollToTop containerRef={containerRef} />
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
