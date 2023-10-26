import React from "react";
import { BsSearch, BsJustify } from "react-icons/bs";
import { useSelector } from "react-redux";
import LogoutBtn from "../Logout";
function Header({ OpenSidebar }) {
  const {
    loginUser: {
      data: {
        user: { names, userType },
      },
    },
  } = useSelector((state) => state?.app?.user);
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
        <LogoutBtn />
      </div>
    </header>
  );
}

export default Header;
