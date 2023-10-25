import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
function SideBar({ openSidebarToggle, OpenSidebar }) {
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
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/dashboard/clients">
            <BsFillGrid3X3GapFill className="icon" /> Clients
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/calculate">
            <BsFillArchiveFill className="icon" /> Calculate Fertilizer
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/orders">
            <BsPeopleFill className="icon" /> Orders
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
      </ul>
    </aside>
  );
}

export default SideBar;
