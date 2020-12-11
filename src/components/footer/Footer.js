import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading
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
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
