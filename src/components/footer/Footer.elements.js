import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #bbbbbb;
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-left:20px;
  @media screen and (max-width: 768px) {
    padding-top: 32px;
    flex-direction: column;
    margin-left:30px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
  flex-direction:row;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #333;
  @media screen and (max-width: 820px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
    text-decoration:none;
    color:#fff;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  &:hover{
    text-decoration:none;
    color:#fff;
  }
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #333;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover{
    text-decoration:none;
    color:#fff;
  }
`;

export const LinkA = styled.a`
  text-decoration:none;
  background:none;
  color:#333;
  &:hover{
    text-decoration:none;
    background:none;
    color:blue;
  }
  &:link {
    text-decoration:none;
    background:none;
    color:#333;
  }
  &:visited {
    text-decoration:none;
    background:none;
    color:#333;
  }
  &:active {
    text-decoration:none;
    background:none;
    color:#333;
  }
`
