import React from 'react';
import {
    FaLinkedin
  } from 'react-icons/fa';
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from './Footer.elements';
  


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
            <SocialLogo to='/'>
            <SocialIcon />
            H+TRACE
          </SocialLogo>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* //Falta agregar rutas de los diferentes links */}
                        <FooterLink to='/sign-in'>Press</FooterLink>
                        <FooterLink to='/sign-in'>Jobs</FooterLink>
                        <FooterLink to='/sign-in'>Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Company</FooterLink>
                        <FooterLink to='/sign-in'>Quality</FooterLink>
                        <FooterLink to='/sign-in'>Cookies</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>H+TRACE © 2020</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
