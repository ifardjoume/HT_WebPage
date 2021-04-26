import React from 'react';
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
  } from './Footer.elements';
import { FormattedMessage } from "react-intl";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* Falta agregar rutas de los diferentes links */}
                        <FooterLink to='prensa'><FormattedMessage id="FooterPressTitle" defaultMessage="Press" /></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='under-construction'><FormattedMessage id="FooterJoinTitle" defaultMessage="Join Us" /></FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='under-construction'><FormattedMessage id="FooterCookiesTitle" defaultMessage="Cookies" /></FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
          <SocialMedia>
       <SocialMediaWrap>
          <WebsiteRights>H+Trace © 2021</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
