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
import { FormattedMessage } from "react-intl";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="solution" onClick={toggle}>
                <FormattedMessage id="SidebarServices" defaultMessage="Services" />
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                <FormattedMessage id="SidebarAbout" defaultMessage="About Us" />
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                <FormattedMessage id="SidebarContact" defaultMessage="Contact" />
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
