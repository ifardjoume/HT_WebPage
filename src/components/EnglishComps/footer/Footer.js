import React from 'react';
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
  } from './Footer.elements';
  


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink to='/sign-in'>Press</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Work</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Company</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/sign-in'>Quality</FooterLink>
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
