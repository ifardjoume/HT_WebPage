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
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Muestras biológicas</ServicesH2>
          <ServicesP>Llevamos THIS a tus muestras de laboratorio!</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>COVID-19</ServicesH2>
          <ServicesP>Llevamos THIS a tus vacunas contra el coronavirus!</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Transplante de órganos</ServicesH2>
          <ServicesP>Llevamos THIS a tus transportes de órganos!</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;