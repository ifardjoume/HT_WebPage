import React from 'react'
import { SideBarContainer,
     Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinkHome,
    SideBtnWrap,
    SidebarRoute
} from '../sideBar/sideBar.elements';
import TranslateBtn from '../navbar/translateBtn';
import {animateScroll as scroll} from 'react-scroll';
import { FormattedMessage } from "react-intl";

const SideBar = ({isOpen, toggle}) => {
    const toggleBottom = () => {
        scroll.scrollTo(9300);
      }
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLinkHome to='/' onClick={toggle}>
                    Home
                </SidebarLinkHome>
                <SidebarLinkHome to='/' onClick={toggleBottom}>
                    <FormattedMessage id="NavbarContact" defaultMessage="Contact" />
                </SidebarLinkHome>
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
