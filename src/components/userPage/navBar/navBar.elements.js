import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { Container } from '../../../globalStyles';

export const Nav = styled.nav`
  background: #fafafa;/* ${({scrollNav}) => (scrollNav ? '#fafafa' : 'transparent')}; */
  height: 70px;
  /* margin-top:-80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 75px;
    padding-top:10px;
  }

`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
  ${Container}
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
   margin-top:20px;
  }
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width:201.25px;
  height:46px;
  @media screen and (max-width: 768px) {
    margin-right: 0rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 90%;
  cursor: pointer;
  font-weight:600;
  margin-top:10px;
  &.active{
    border-bottom: 4px solid #21209c;
  }
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
      text-decoration:none;
    }
`

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