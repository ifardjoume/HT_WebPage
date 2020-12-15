import { Button } from '../../globalStyles';
import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
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
            <FooterSubscription>
                <FooterSubHeading>
                    Contact us to start the change
                </FooterSubHeading>
                <FooterSubText>
                    We are just getting started!
                </FooterSubText>
                <Form>
                 <FormInput name= "email" type="email" placeholder="Your Email"/>
                     <Button fontBig>Send</Button>
                </Form>
            </FooterSubscription>
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
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
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
