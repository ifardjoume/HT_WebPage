import React from 'react';
import Icon1 from '../../../images/samples.svg'
import Icon2 from '../../../images/heart.svg'
import Icon3 from '../../../images/organ.svg'
import {
    ServicesIcon,
    ServicesWrapper,
    ServicesH2,
    ServicesContainer,
    ServicesCard,
    LinkTo
} from '../../services/Services.elements';

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
        <LinkTo to="samples">
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Biological Samples</ServicesH2>
        </ServicesCard>
        </LinkTo>
        <LinkTo to="under-construction">
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>COVID-19 Vaccines</ServicesH2>
        </ServicesCard>
        </LinkTo>
        <LinkTo to="under-construction">
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Organs</ServicesH2>
        </ServicesCard>
        </LinkTo>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;