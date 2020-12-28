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
  } from './Footer.elements';
  


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink><LinkA>Prensa</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Trabajos</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Contacto</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Compania</LinkA></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink><LinkA>Calidad</LinkA></FooterLink>
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
