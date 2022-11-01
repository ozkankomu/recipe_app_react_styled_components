import React from "react";
import { Brand, Nav, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="">
        <i>{"<Ozkan/>"}</i>
        <span>Recipe</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/about">about</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/Logout" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
