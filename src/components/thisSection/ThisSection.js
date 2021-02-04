import React from 'react';
import { Container} from '../../globalStyles';
import {animateScroll as scroll} from 'react-scroll';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper,
    NavBtn,
    NavBtnLink
  } from './ThisSection.elements';
import { FormattedMessage } from "react-intl";
import Cookies from 'js-cookie';
import ThisEspanol from '../../images/THISespanol.png';
import ThisIngles from '../../images/THISingles.png';

var THISimage = Cookies.get('locale') === 'en' ? ThisIngles : ThisEspanol

const ThisSection = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
    return (
        <>
            <InfoSec id="solution">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading><FormattedMessage id="THISSectionTitle" defaultMessage="T.H.I.S. System" /></Heading>
                                <Subtitle>
                                    <FormattedMessage id="THISSectionDescription" defaultMessage="T.H.I.S. is the world's most advanced smart logistics system for healthcare. This total traceability solution includes a combination of PCMs (Phase Change Materials) along with a series of sensors that report information that no other system can provide." />
                                </Subtitle>
                                <NavBtn>
                                <NavBtnLink to="/this" onClick={toggleHome}>
                                <FormattedMessage id="THISSectionButton" defaultMessage="More Information" />
                                </NavBtnLink>
                                </NavBtn>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                            <Img src={THISimage}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default ThisSection
