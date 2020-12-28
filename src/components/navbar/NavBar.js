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
import TranslateBtn from './translateBtn';
import Logo from '../../images/logo-navbar-blue.png';

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
              <NavIcon src={Logo}  />
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
                exact='true'
                offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLinks to="services"
                smooth={true}
                duration={600}
                exact='true'
                offset={-80}
                >
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about"
                smooth={true}
                duration={600}
                exact='true'
                offset={-80}
                >
                  Empresa
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                smooth={true}
                duration={600}
                exact='true'
                offset={-80}
                >
                  Contacto
                </NavLinks>
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
    </>
  );
}

export default Navbar;
