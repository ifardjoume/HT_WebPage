import React from 'react';
import Image1 from '../../images/emi.png';
import Image2 from '../../images/javi.png'
import Image3 from '../../images/ivan.png';
import { Container} from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
  ImgCofounderContainer
} from './aboutCofounders.elements';

function AboutCofounders() {
  return (
    <>
            <InfoSec id="about">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>Nuestra Empresa</Heading>
                                <Subtitle>H+Trace fue fundada en 2019 por tres profesionales de ámbitos diversos con el objetivo de incorporar innovación y tecnología a la salud.<br></br> <br></br> 
                                          Esta industria funciona en base a datos, sea para diagnóstico, tratamiento, cuidado o investigación clínica.
                                          Sin embargo, la logística es un punto ciego sin información.

                                          H+Trace nació para aportar esos datos indispensables para la mejora del proceso.<br></br><br></br> 
                                          Buscamos consolidar un nuevo estándar de buenas prácticas de transporte en salud.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgCofounderContainer>
                                <Img src={Image1} alt="Emi" />
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle>Management</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image2} alt="Javi" />
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle>Desarrollo de Negocios</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image3} alt="Ivan" />
                                <TopLine>Iván Fardjoume</TopLine>
                                <Subtitle>Tecnología</Subtitle>
                                </ImgCofounderContainer>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
  );
}
export default AboutCofounders;