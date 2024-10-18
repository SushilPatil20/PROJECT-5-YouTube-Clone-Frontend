import React, { useEffect, useState } from "react";
import Header from "../components/headerComponents/Header";
import { Outlet } from "react-router";
import Sidebar from "./sideBarComponent/SideBar";
import { checkScreenSize } from "../utils/helpers";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(checkScreenSize());

  useEffect(() => {
    const handleResize = () => {
      console.log(isSidebarOpen);
      checkScreenSize() ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header toggleSidebar={toggleSidebar} className="flex-shrink-0" />
        <main className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} />
          {isSidebarOpen}
          <div className="flex-1 h-full overflow-hidden">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
