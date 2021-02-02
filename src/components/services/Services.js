import React from 'react';
import Icon1 from '../../images/samples.svg'
import Icon2 from '../../images/heart.svg'
import Icon3 from '../../images/organ.svg'
import {
    ServicesIcon,
    ServicesWrapper,
    ServicesH2,
    ServicesContainer,
    ServicesCard,
    LinkTo
} from './Services.elements';
import { FormattedMessage } from "react-intl";


function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
      <LinkTo to="samples">
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2><FormattedMessage id="ServicesCardTitle1" defaultMessage="Biological Samples" /></ServicesH2>
          </ServicesCard>
      </LinkTo>
      <LinkTo to="under-construction">
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2><FormattedMessage id="ServicesCardTitle2" defaultMessage="COVID-19 Vaccines" /></ServicesH2>
        </ServicesCard>
      </LinkTo>
      <LinkTo to="under-construction">
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2><FormattedMessage id="ServicesCardTitle3" defaultMessage="Organs" /></ServicesH2>
        </ServicesCard>
      </LinkTo>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;