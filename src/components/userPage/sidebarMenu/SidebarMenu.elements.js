import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.div`
  background: #fafafa;
  height: 80px;
  display: flex;                  
  flex-direction: row;
  flex-wrap: nowrap;              
  justify-content: space-between;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #fafafa;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  &:hover{
    text-decoration:none;
    color:#fff;
  }

  @media screen and (max-width: 768px) {
   display:none;
  }
`;

export const NavIconLogo = styled.img`
  margin-right: 0.5rem;
  width:201.25px;
  height:46px;
  @media screen and (max-width: 768px) {
    margin-right: 0rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtnLink = styled(Link)`
  border-radius:50px;
  margin-top:10px;
  background: transparent;
  white-space:nowrap;
  padding: 10px 22px;
  color: #333;
  outline: none;
  border: none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      color: blue;
      transition: all 0.2s ease-in-out;
      background:transparent;
      text-decoration:none;
    }
`;

export const UserDiv = styled.div`
 display:flex;
`


export const DateP = styled.p`
 margin:0;
`


export const UsernameHeader = styled.h4`
 margin:0
`


export const UserInfoDiv = styled.div`
padding-top:20px;
display:flex;
flex-direction: column;
`