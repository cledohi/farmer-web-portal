import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../home";
import Login from "../home/componemts/login";
import RegisterUser from "../home/componemts/RegisterUser";
import Dashboard from "../dashboard/dashboard";
import NotFound from "../notFount";
import HomeDashboard from "../dashboard/pages/Home";
import Orders from "../dashboard/pages/Orders";
import Calculate from "../dashboard/pages/Calculate";
import UserManagement from "../dashboard/pages/UserManagement";
import Seeds from "../dashboard/pages/Seeds";
import Fertilizer from "../dashboard/pages/Fertilizer";
import { useSelector } from "react-redux";
import Lands from "../dashboard/pages/Lands";
// 0788637333
const FarmerRoutes = () => {
  const userState = useSelector((state) => state.app.user);
  const usertype = userState?.loginUser?.data?.user?.userType;
  const isAdmin = usertype === "ADMIN" ? true : false;
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <RegisterUser /> },
      ],
    },
    {
      path: "/dashBoard",
      element: <Dashboard />,
      children: [
        isAdmin
          ? { index: true, element: <HomeDashboard /> }
          : { index: true, element: <Calculate /> },
        { path: "lands", element: <Lands /> },
        { path: "orders", element: <Orders /> },
        { path: "calculate", element: <Calculate /> },
        { path: "user", element: <UserManagement /> },
        { path: "seeds", element: <Seeds /> },
        { path: "fertilizer", element: <Fertilizer /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};

export default FarmerRoutes;
