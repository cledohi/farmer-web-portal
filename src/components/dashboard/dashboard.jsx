import React from "react";
import { useSelector } from "react-redux";
function Dashboard(props) {
  const { user, order } = useSelector((state) => state.app);
  console.log(user);
  console.log(order);
  git;
  return (
    <div>
      <span>Dashboard Page</span>
    </div>
  );
}

export default Dashboard;
