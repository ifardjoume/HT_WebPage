import React,{ useState } from 'react';
import Cookies from 'js-cookie';
import { GET_USERNAME } from "../../../Query";
import { useQuery } from "@apollo/react-hooks"; 
import { IconContext } from 'react-icons/lib';
import { 
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap,
    NavLogo,
    NavIconLogo,
    NavBtn,
    NavBtnLink,
    UserDiv,
    DateP,
    Username,
    UserInfoDiv
 } from './SidebarMenu.elements';
 import SubMenu from './SubMenu';
 import { SidebarData } from './SideBarData';
 import * as FaIcons from 'react-icons/fa';
 import * as AiIcons from 'react-icons/ai';
 import { BiLogOut } from 'react-icons/bi';

import Logo from '../../../images/logo-navbar-blue.png'

/* function getUsername() {
  const { loading, error, data } =  useQuery(GET_USERNAME);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return   (data.user.username)
} */

const SidebarMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const timestamp = Date.now();
    let date = new Intl.DateTimeFormat('es-AR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp)
    const showSidebar = () => setSidebar(!sidebar);
    const toggleLogOut = () => Cookies.remove('token');
    return (
        <>
        <IconContext.Provider value={{ color: '#333' }}>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <NavLogo to='/'>
              < NavIconLogo src={Logo}  />
            </NavLogo>
            <UserDiv>
              <UserInfoDiv>
                <DateP>{date}</DateP>
                <Username>Hello</Username>
              </UserInfoDiv>
              <NavBtn>
                  <NavBtnLink to='/' onClick={toggleLogOut}>
                    <BiLogOut size={32} />
                  </NavBtnLink>
              </NavBtn>
            </UserDiv>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </>
    )
}

export default SidebarMenu
