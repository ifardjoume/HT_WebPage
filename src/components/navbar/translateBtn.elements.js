import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavBtn = styled.nav`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-left:10px;

  @media screen and (max-width: 768px) {
    display:flex;
    justify-content:center;
    margin-bottom:10px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius:50px;
  margin-top:10px;
  background: transparent;
  white-space:nowrap;
  color: #153e90;
  outline: none;
  border: none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      color: #0a043c;
      transition: all 0.2s ease-in-out;
      background:#98acf8;
      text-decoration:none;
    }
`;

export const Flag = styled.img`
width:30px;
height:30px;
`