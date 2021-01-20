import React,{ useState } from 'react';
import Cookies from 'js-cookie';
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
    UserInfoDiv
 } from './SidebarMenu.elements';
 import Username from './Username';
 import SubMenu from './SubMenu';
 import { SidebarData } from './SideBarData';
 import * as FaIcons from 'react-icons/fa';
 import * as AiIcons from 'react-icons/ai';
 import { BiLogOut } from 'react-icons/bi';

import Logo from '../../../images/logo-navbar-blue.png'

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
                <Username />
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
