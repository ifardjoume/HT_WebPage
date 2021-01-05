import React from 'react';
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    FooterLink
  } from '../../footer/Footer.elements';
  


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink to='sign-in'>Press</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='sign-in'>Join us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='sign-in'>Cookies</FooterLink>
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
