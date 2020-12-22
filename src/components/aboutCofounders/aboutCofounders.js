import React from 'react';
import Image1 from '../../images/emi.png';
import Image2 from '../../images/javi.png'
import Image3 from '../../images/ivan.png';
import { Container,Button } from '../../globalStyles';
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
                                <Heading>H+Trace</Heading>
                                <Subtitle>Fue fundada en 2019 por un equipo de profesionales de diversos ámbitos con el objetivo de incorporar innovación y tecnología al servicio de la salud. Buscamos consolidar un nuevo estándar de buenas prácticas de transporte en salud.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgCofounderContainer>
                                <Img src={Image1} alt="Emi" />
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle>Control de Calidad</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image2} alt="Javi" />
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle>Administración</Subtitle>
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