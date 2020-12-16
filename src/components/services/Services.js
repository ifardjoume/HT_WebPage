import React from 'react';
import Icon1 from '../../images/samples.svg'
import Icon2 from '../../images/heart.svg'
import Icon3 from '../../images/organ.svg'
import {
    ServicesIcon,
    ServicesWrapper,
    ServicesH1,
    ServicesH2,
    ServicesContainer,
    ServicesCard,
    ServicesP
} from './Services.elements';

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Biological Samples</ServicesH2>
          <ServicesP>We bring traceability to your samples!</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>COVID-19</ServicesH2>
          <ServicesP>We bring traceability to your vaccines!</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Organ Transplant</ServicesH2>
          <ServicesP>We bring traceability to your transplants!</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;