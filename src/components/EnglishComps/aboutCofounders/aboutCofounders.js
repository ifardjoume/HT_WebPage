import React from 'react';
import Image1 from '../../../images/emi.png';
import Image2 from '../../../images/javi.png'
import Image3 from '../../../images/ivan.png';
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
                                <Heading>Our Company</Heading>
                                <Subtitle>H + Trace was founded in 2019 by three professionals from diverse fields with the aim of incorporating innovation and technology into health.<br></br> <br></br> 
                                          This industry works based on data, be it for diagnosis, treatment, care or clinical research. However, logistics is a blind spot without information. H + Trace was born to provide those essential data to improve the process.<br></br><br></br> 
                                          We seek to consolidate a new standard of good practices in health transport.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image1} alt="Emi" />
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle>Management</Subtitle>
                                </ImgCofounderContainer>
                                </ImgWrapperRow>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <Img src={Image2} alt="Javi" />
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle>Bussiness Development</Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <Img src={Image3} alt="Ivan" />
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