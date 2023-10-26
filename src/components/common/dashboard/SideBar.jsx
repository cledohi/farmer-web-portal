import React from "react";
import { useSelector } from "react-redux";
import { MdContentCut } from "react-icons/md";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
function SideBar({ openSidebarToggle, OpenSidebar }) {
  const {
    loginUser: {
      data: {
        user: { userType },
      },
    },
  } = useSelector((state) => state?.app?.user);
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" color="white" />
          Agro Tech Store
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <MdContentCut size={20} color="red" />
        </span>
      </div>

      <ul className="sidebar-list">
        {userType !== "FARMER" ? (
          <>
            <li className="sidebar-list-item">
              <Link to="/dashboard">
                <BsGrid1X2Fill className="icon" /> Dashboard
              </Link>
            </li>

            <li className="sidebar-list-item">
              <Link to="/dashboard/seeds">
                <BsListCheck className="icon" /> Seeds
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/dashboard/fertilizer">
                <BsMenuButtonWideFill className="icon" /> Fertilizer
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/dashboard/user">
                <BsFillGearFill className="icon" /> User Management
              </Link>
            </li>
          </>
        ) : null}

        {userType === "FARMER" || userType === "ADMIN" ? (
          <li className="sidebar-list-item">
            <Link to="/dashboard/calculate">
              <BsFillArchiveFill className="icon" /> Calculate Fertilizer
            </Link>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}

export default SideBar;
