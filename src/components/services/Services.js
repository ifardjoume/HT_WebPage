import React from 'react';
import { Button } from '../../globalStyles';
import { GiHealthNormal } from 'react-icons/gi';
import { GiHealthPotion, GiHealthCapsule } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    ServicesSection,
    ServicesWrapper,
    ServicesHeading,
    ServicesContainer,
    ServicesCard,
    ServicesCardInfo,
    ServicesCardIcon,
    ServicesCardPlan,
    ServicesCardCost,
    ServicesCardLength,
    ServicesCardFeatures,
    ServicesCardFeature
} from './Services.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ServicesSection>
        <ServicesWrapper>
          <ServicesHeading>Our Services</ServicesHeading>
          <ServicesContainer>
            <ServicesCard to='/sign-up'>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiHealthCapsule />
                </ServicesCardIcon>
                <ServicesCardPlan>Biological Samples</ServicesCardPlan>
                <ServicesCardCost></ServicesCardCost>
                <ServicesCardLength></ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>View More</Button>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to='/sign-up'>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiHealthNormal />
                </ServicesCardIcon>
                <ServicesCardPlan>COVID-19</ServicesCardPlan>
                <ServicesCardCost></ServicesCardCost>
                <ServicesCardLength></ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>View More</Button>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to='/sign-up'>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiHealthPotion />
                </ServicesCardIcon>
                <ServicesCardPlan>Organ Transplant</ServicesCardPlan>
                <ServicesCardCost></ServicesCardCost>
                <ServicesCardLength></ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                  <ServicesCardFeature></ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>View More</Button>
              </ServicesCardInfo>
            </ServicesCard>
          </ServicesContainer>
        </ServicesWrapper>
      </ServicesSection>
    </IconContext.Provider>
  );
}
export default Pricing;