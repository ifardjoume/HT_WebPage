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
    LinkA
  } from '../../footer/Footer.elements';
  


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink><LinkA>Press</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Work</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Contact</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLink><LinkA>Company</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Quality</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Cookies</LinkA></FooterLink>
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
