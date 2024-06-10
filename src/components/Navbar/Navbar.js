// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MenuIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink 
} from './Navbar.styles';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Logo</NavLogo>
        <MenuIcon onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks to="/" onClick={toggleMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/About" onClick={toggleMenu}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Contact" onClick={toggleMenu}>
              Contact
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Sports" onClick={toggleMenu}>
               Sports
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/SignUp" onClick={toggleMenu}>
              Sign Up
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Login">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
