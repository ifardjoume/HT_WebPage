import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
    color: #333;
    padding: 70px 0;
    background:#e4f4fd;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction:row-reverse;
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis:100%;
        display: flex;
        justify-content:center;
    }
`
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;

    @media screen and (max-width: 768px){
        padding-bottom:65px;
    }
`

export const TopLine = styled.div`
    color: #333;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #333;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:#333;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
 justify-content: flex-end;
 flex-direction:column;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items:center;
  justify-content:flex-start;
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
  white-space:nowrap;
  color: #fafafa;
  border: none;
  background:#0e49b5;
  cursor:pointer;
  padding:10px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      transition: all 0.2s ease-in-out;
      background:#161d6f;
      text-decoration:none;
      color:#fafafa;
    }
`;