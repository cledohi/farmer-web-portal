import React, { useState } from "react";

import Header from "../common/dashboard/Header";
import SideBar from "../common/dashboard/SideBar";

import "./dashboard.css";
import { Outlet } from "react-router-dom";
function Dashboard(props) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
