import React,{useState,useEffect} from 'react';
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
  NavLinks,
  NavBtnLink
} from './Navbar.elements';




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
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavIcon  />
              H+Trace
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
                <NavLinks to='/' 
                onClick={toggleHome}
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover"
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
                >
                  Descubre
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services"
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
                >
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about"
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
                >
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
                >
                  Contacto
                </NavLinks>
              </NavItem>
              <NavBtn>
                  <NavBtnLink to='/sign-in'>
                    LOGIN
                  </NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;
