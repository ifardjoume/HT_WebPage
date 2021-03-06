import React from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinksHome,
  NavBtnLink
} from '../navbar/Navbar.elements';
import TranslateBtn from '../navbar/translateBtn';
import Logo from '../../images/logo-navbar-blue.png';
import { IconContext } from 'react-icons';
import { FormattedMessage } from "react-intl";


const Navbar = ({ toggle }) => {


  const toggleHome = () => {
    scroll.scrollToTop();
  }
  
  const toggleBottom = () => {
    scroll.scrollTo(4360);
  }
  return (
    <>
     <IconContext.Provider value={{ color: '#333' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavIcon src={Logo}  />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksHome to='/' 
                onClick={toggleHome}
                >
                  Home
                </NavLinksHome>
              </NavItem>
              <NavItem>
                <NavLinksHome to='/'
                onClick={toggleBottom}
                >
                  <FormattedMessage id="NavbarContact" defaultMessage="Contact" />
                </NavLinksHome>
              </NavItem>
              <NavBtn>
                  <NavBtnLink to='/sign-in'>
                    LOGIN
                  </NavBtnLink>
              </NavBtn>
              <TranslateBtn />
            </NavMenu>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;
