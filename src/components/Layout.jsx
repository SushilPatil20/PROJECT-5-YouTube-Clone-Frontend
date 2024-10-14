import React from "react";
import Header from "../components/headerComponents/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-grow">
        <Outlet /> {/* This is where your Login/Signup will appear */}
      </main>
    </div>
  );
};

export default Layout;
