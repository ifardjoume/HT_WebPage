import React from 'react';
import Image1 from '../../../images/emilianoBuitrago.png';
import Image2 from '../../../images/javierCuello.png'
import Image3 from '../../../images/ivanFardjoume.png';
import { Container} from '../../../globalStyles';
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
} from '../../aboutCofounders/aboutCofounders.elements';

function AboutCofounders() {
  return (
    <>
            <InfoSec id="about">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>About Us</Heading>
                                <Subtitle>H + Trace was founded in 2019 with the aim of incorporating innovation and technology into healthcare.<br></br> <br></br> 
                                          The medical industry works based on data, be it for diagnosis, treatment, care or clinical research. However, logistics is a blind spot without information.<br/> H + Trace was created to provide those essential data to improve this process.<br></br><br></br> 
                                          We seek to establish a new standard of good practices in healthcare transport.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image1} alt="EmilianoBuitrago" />
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle>Management</Subtitle>
                                </ImgCofounderContainer>
                                </ImgWrapperRow>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image2} alt="JavierCuello" />
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle>Bussiness Development</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image3} alt="IvanFardjoume" />
                                <TopLine>Iván Fardjoume</TopLine>
                                <Subtitle>IT</Subtitle>
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