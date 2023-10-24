import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../home";
import Login from "../home/componemts/login";
import Register from "../home/componemts/register";
import Dashboard from "../dashboard/dashboard";
import NotFound from "../notFount";

const FarmerRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    { path: "/dashBoard", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default FarmerRoutes;
