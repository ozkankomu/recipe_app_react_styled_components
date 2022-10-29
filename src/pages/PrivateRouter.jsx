import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const localLogin = JSON.parse(localStorage.getItem("LOGIN"));
  const { state: login } = useLocation();

  return (
    <div>
      {login.username === localLogin.username ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default PrivateRouter;
