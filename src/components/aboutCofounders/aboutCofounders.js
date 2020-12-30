import React from 'react';
import Image1 from '../../images/emilianoBuitrago.png';
import Image2 from '../../images/javierCuello.png'
import Image3 from '../../images/ivanFardjoume.png';
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
  ImgCofounderContainer,
  ImgWrapperRow
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
                                          Sin embargo, la logística y el transporte son un punto ciego sin información.

                                          H+Trace nació para aportar esos datos indispensables en busca de perfeccionar el proceso.<br></br><br></br> 
                                          Buscamos consolidar un nuevo estándar de buenas prácticas de transporte en el ámbito de la salud.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image1} alt="EmilianoBuitrago" />
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle>Director (general)</Subtitle>
                                </ImgCofounderContainer>
                                </ImgWrapperRow>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image2} alt="JavierCuello" />
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle>Desarrollo de Negocios</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image3} alt="IvanFarjoume" />
                                <TopLine>Iván Fardjoume</TopLine>
                                <Subtitle>Tecnología</Subtitle>
                                </ImgCofounderContainer>
                                </ImgWrapperRow>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
  );
}
export default AboutCofounders;