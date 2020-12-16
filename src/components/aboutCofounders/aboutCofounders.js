import React from 'react';
import Image1 from '../../images/emi.png';
import Image2 from '../../images/javi.png'
import Image3 from '../../images/ivan.png';
import { IconContext } from 'react-icons/lib';
import {
    AboutSection,
    AboutWrapper,
    AboutHeading,
    AboutContainer,
    AboutCard,
    AboutCardInfo,
    AboutCardIcon,
    AboutCardPlan,
    AboutCardCost,
    AboutCardLength,
    AboutCardFeatures,
    AboutCardFeature,
    AboutImg
} from './aboutCofounders.elements';

function AboutCofounders() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <AboutSection>
        <AboutWrapper>
          <AboutHeading></AboutHeading>
          <AboutContainer>
            <AboutCard>
              <AboutCardInfo>
              <AboutCardIcon>
              <AboutImg  src={Image1} alt="Ivan"/>
              </AboutCardIcon>
                <AboutCardPlan>Emiliano Buitrago</AboutCardPlan>
                <AboutCardCost>CEO</AboutCardCost>
                <AboutCardLength>Quality assurance & management.</AboutCardLength>
                <AboutCardFeatures>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
            <AboutCard>
              <AboutCardInfo>
              <AboutCardIcon>
              <AboutImg  src={Image3} alt="Ivan"/>
              </AboutCardIcon>
                <AboutCardPlan>Iván Fardjoume</AboutCardPlan>
                <AboutCardCost>CTO</AboutCardCost>
                <AboutCardLength>Hardware & coding.</AboutCardLength>
                <AboutCardFeatures>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
            <AboutCard>
              <AboutCardInfo>
              <AboutCardIcon>
              <AboutImg  src={Image2} alt="Ivan"/>
              </AboutCardIcon>
                <AboutCardPlan>Javier Cuello</AboutCardPlan>
                <AboutCardCost>CFO</AboutCardCost>
                <AboutCardLength>Business development.</AboutCardLength>
                <AboutCardFeatures>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                  <AboutCardFeature></AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
          </AboutContainer>
        </AboutWrapper>
      </AboutSection>
    </IconContext.Provider>
  );
}
export default AboutCofounders;