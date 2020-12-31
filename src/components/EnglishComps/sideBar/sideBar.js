import React from 'react'
import { SideBarContainer,
     Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from '../../sideBar/sideBar.elements';
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
                    Services
                </SidebarLink>
                <SidebarLink to="about">
                    About Us
                </SidebarLink>
                <SidebarLink to="contact">
                    Contact
                </SidebarLink>
                <TranslateBtn />
                <SideBtnWrap>
                    <SidebarRoute to='/sign-in'>LOGIN</SidebarRoute>
                </SideBtnWrap>
            </SidebarMenu>
            </SidebarWrapper>

        </SideBarContainer>
    )
}

export default SideBar
