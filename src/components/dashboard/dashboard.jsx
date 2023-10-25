import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "../common/Logout";
import Header from "../common/dashboard/Header";
import SideBar from "../common/dashboard/SideBar";
import Home from "../home";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
function Dashboard(props) {
  const { user, order } = useSelector((state) => state.app);
  const userState = useSelector((state) => state.app.user);
  const token = userState?.loginUser?.data?.token;
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
