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

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="discover">
                    Discover
                </SidebarLink>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="contact">
                    Contact
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/sign-in'>User Area</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>

        </SideBarContainer>
    )
}

export default SideBar
