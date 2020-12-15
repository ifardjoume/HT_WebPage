import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';




const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              H+Trace
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="discover">
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about">
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact">
                  Contact
                </NavLinks>
              </NavItem>
              <NavBtn>
                  <NavBtnLink to='/sign-in'>
                    User Area
                  </NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;
