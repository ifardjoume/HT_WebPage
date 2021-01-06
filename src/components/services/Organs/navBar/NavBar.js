import React,{useState, useEffect} from 'react';
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
} from '../../../navbar/Navbar.elements';
import TranslateBtn from './translateBtn';
import Logo from '../../../../images/logo-navbar-blue.png';
import { IconContext } from 'react-icons';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  })

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
     <IconContext.Provider value={{ color: '#333' }}>
        <Nav scrollNav={scrollNav}>
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