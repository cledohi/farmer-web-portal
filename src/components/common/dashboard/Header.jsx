import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { useSelector } from "react-redux";
function Header({ OpenSidebar }) {
  const {
    loginUser: {
      data: {
        token,
        user: { names, username, userType },
      },
    },
  } = useSelector((state) => state.app.user);
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" color="white" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" color="white" />
      </div>
      <div className="admin-welcome">
        Welcome <strong>{userType}</strong> {names}
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" color="white" />
        <BsFillEnvelopeFill className="icon" color="white" />
        <BsPersonCircle className="icon" color="white" />
      </div>
    </header>
  );
}

export default Header;
