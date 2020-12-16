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
                        {/* //Falta agregar rutas de los diferentes links */}
                        <FooterLink to='/sign-in'>Press</FooterLink>
                        <FooterLink to='/sign-in'>Jobs</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Company</FooterLink>
                        <FooterLink to='/sign-in'>Ensurance Quality</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        {/* //Falta agregar rutas de los diferentes links */}
                        <FooterLink to='/sign-in'>Cookies</FooterLink>
                        <FooterLink to='/sign-in'>Contact</FooterLink>
                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            H+TRACE
          </SocialLogo>
          <WebsiteRights>H+TRACE © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
