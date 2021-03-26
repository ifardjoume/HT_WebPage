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
  ImgWrapperRow,
  LinkTo
} from './aboutCofounders.elements';
import { FormattedMessage } from "react-intl";
import {animateScroll as scroll} from 'react-scroll';

const toggleHome = () => {
    scroll.scrollToTop();
}

function AboutCofounders() {
  return (
    <>
            <InfoSec id="about">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading><FormattedMessage id="AboutTitle" defaultMessage="About Us"/></Heading>
                                <Subtitle><FormattedMessage id="AboutDescriptionPart1" defaultMessage="H+Trace was founded in 2019 with the aim of incorporating innovation and technology into healthcare."/><br></br> <br></br> 
                                <FormattedMessage id="AboutDescriptionPart2" defaultMessage="The medical industry works based on data, be it for diagnosis, treatment, care or clinical research. However, logistics is a blind spot without information.
                                        H+Trace was created to provide those essential data to improve this process."/><br></br><br></br> 
                                          <FormattedMessage id="AboutDescriptionPart3" defaultMessage="We seek to establish a new standard of good practices in healthcare transport."/></Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <LinkTo to="/EmilianoBuitrago"><Img src={Image1} alt="EmilianoBuitrago" onClick={toggleHome}/></LinkTo>
                                {/*<Img src={Image1} alt="EmilianoBuitrago" />*/}
                                <TopLine>Emiliano Buitrago</TopLine>
                                <Subtitle><FormattedMessage id="AboutCofoundersTitle1" defaultMessage="Management"/></Subtitle>
                                </ImgCofounderContainer>
                                </ImgWrapperRow>
                                <ImgWrapperRow>
                                <ImgCofounderContainer>
                                <LinkTo to="/JavierCuello"><Img src={Image2} alt="JavierCuello" onClick={toggleHome} /></LinkTo>
                                {/*<Img src={Image2} alt="JavierCuello" />*/}
                                <TopLine>Javier Cuello</TopLine>
                                <Subtitle><FormattedMessage id="AboutCofoundersTitle2" defaultMessage="Bussiness Development"/></Subtitle>
                                </ImgCofounderContainer>
                                <ImgCofounderContainer>
                                <LinkTo to="/IvanFardjoume"><Img src={Image3} alt="IvanFardjoume" onClick={toggleHome} /></LinkTo>
                                {/*<Img src={Image3} alt="IvanFardjoume" />*/}
                                <TopLine>Iván Fardjoume</TopLine>
                                <Subtitle><FormattedMessage id="AboutCofoundersTitle3" defaultMessage="IT"/></Subtitle>
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