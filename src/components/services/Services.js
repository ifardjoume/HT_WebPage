import React from 'react';
import Icon1 from '../../images/samples.svg'
import Icon2 from '../../images/heart.svg'
import Icon3 from '../../images/organ.svg'
import {
    ServicesIcon,
    ServicesWrapper,
    ServicesH2,
    ServicesContainer,
    ServicesCard
} from './Services.elements';

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Muestras biológicas</ServicesH2>
          </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Vacunas COVID-19</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Órganos</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;