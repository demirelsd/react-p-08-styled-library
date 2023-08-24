import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({currentUser, setCurrentUser}) => {
  const [show, setShow] = useState(false)
  const handleLogout = () => {
    setCurrentUser(false)
    sessionStorage.clear()
  }
 
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Styled Library</Logo>
      <HamburgerIcon onClick={() => setShow(!show)}>{menuIcon}</HamburgerIcon>
      <Menu showMenu={show}>
        <MenuLink to="/" style={({isActive}) =>({color:isActive ? 'red' : 'inherit'})}>Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>

        {currentUser ? (
          <MenuLink to="/login" onClick={handleLogout}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/login">Login</MenuLink>
            <MenuLink to="/register">Register</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
