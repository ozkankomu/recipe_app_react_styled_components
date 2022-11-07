import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles.jsx";
import Navbar from "../components/nav/Navbar.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";
import About from "../pages/about/About.jsx";
import Detail from "../pages/detail/Detail.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe_app_react_styled_components" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Logout" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route
          path="/recipe_app_react_styled_components/detail"
          element={<PrivateRouter />}
        >
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
