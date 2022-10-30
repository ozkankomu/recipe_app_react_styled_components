import React from "react";
import { NavLink } from "react-router-dom";
import { Contact } from "../styles/Form";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav
        className="navbar navbar-expand-lg  "
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "6rem",
          justifyContent: "space-around",
          fontSize: "1.5rem",
          color: "#ffffff",
          boxShadow: "inset 5px 5px 30px black, 5px 5px 10px black",
          backgroundColor: " #4d024dde",
        }}
      >
        <div className="container-fluid  row">
          <div className="col-7">
            <img
              className="mx-4"
              src="https://i.pinimg.com/originals/37/f1/29/37f129dcee7b4890dfed08b6bd0c2a57.gif"
              alt="img"
              style={{ width: "350px", height: "100px" }}
            />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse col-5" id="navbarNav">
            <ul className="navbar-nav">
              <Contact className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  About
                </NavLink>
              </Contact>
              <Contact className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </Contact>
              <Contact className="nav-item">
                <a
                  className="nav-link text-light"
                  href="https://www.linkedin.com/in/ozkankomu/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </Contact>
              <Contact className="nav-item ">
                <a
                  className="nav-link text-light"
                  href="https://github.com/ozkankomu"
                  target="_blank"
                >
                  Github
                </a>
              </Contact>
              <Contact className="nav-item ">
                <NavLink to="/" className="nav-link text-light" href="#">
                  Log out
                </NavLink>
              </Contact>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
