import React from 'react'
import { SideBarContainer,
     Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './sideBar.elements';
import TranslateBtn from '../navbar/translateBtn';


const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="services">
                    Servicios
                </SidebarLink>
                <SidebarLink to="about">
                    Nosotros
                </SidebarLink>
                <SidebarLink to="contact">
                    Contacto
                </SidebarLink>
                <TranslateBtn />
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/sign-in'>User Area</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>

        </SideBarContainer>
    )
}

export default SideBar
