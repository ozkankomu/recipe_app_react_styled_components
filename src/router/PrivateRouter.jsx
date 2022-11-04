import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const item = JSON.parse(sessionStorage.getItem("user"));

  if (item === "admin") {
  }

  return <div>{item === "admin" ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
