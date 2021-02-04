import React from 'react';
import Icon1 from '../../images/samples.svg'
import Icon2 from '../../images/heart.svg'
import Icon3 from '../../images/organ.svg'
import {
    ServicesIcon,
    ServicesWrapper,
    ServicesH2,
    ServicesH1,
    ServicesContainer,
    ServicesCard,
    //LinkTo
} from './Services.elements';
import { FormattedMessage } from "react-intl";


function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1><FormattedMessage id="ServicesTitle" defaultMessage="Implementation Areas" /></ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2><FormattedMessage id="ServicesCardTitle1Pt1" defaultMessage="Biological" /><br/><FormattedMessage id="ServicesCardTitle1Pt2" defaultMessage="Samples" /></ServicesH2>
          </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2><FormattedMessage id="ServicesCardTitle2Pt1" defaultMessage="COVID-19" /><br/><FormattedMessage id="ServicesCardTitle2Pt2" defaultMessage="Vaccines" /></ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2><FormattedMessage id="ServicesCardTitle3Pt1" defaultMessage="Organ" /><br/><FormattedMessage id="ServicesCardTitle3Pt2" defaultMessage="Transplants" /></ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;