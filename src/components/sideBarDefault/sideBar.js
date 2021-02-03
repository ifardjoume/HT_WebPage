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


const SideBar = ({isOpen, toggle}) => {
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
