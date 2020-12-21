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
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink to='/sign-in'>Prensa</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Trabajos</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Contacto</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Compania</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Calidad</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Cookies</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
          <SocialMedia>
       <SocialMediaWrap>
          <WebsiteRights>H+Trace © 2020</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
