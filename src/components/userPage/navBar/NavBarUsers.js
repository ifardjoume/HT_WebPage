import React,{useState,useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import Cookies from 'js-cookie';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavBtn,
  NavBtnLink
} from './navBar.elements';
import Logo from '../../../images/logo-navbar-blue.png';

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
  const dropCookies = () => {
    Cookies.remove('token');
  }
  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavIcon src={Logo}  />
            </NavLogo>
            <NavBtn>
                  <NavBtnLink to='/' onClick={dropCookies}>
                    LOGOUT
                  </NavBtnLink>
              </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;
