import React from 'react';
import { Container} from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    //Img,
    ImgWrapper,
    NavBtn,
    NavBtnLink
  } from './ThisSection.elements';
import { FormattedMessage } from "react-intl";

const ThisSection = () => {
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
                                <NavBtnLink to="/this">
                                <FormattedMessage id="THISSectionButton" defaultMessage="More Information" />
                                </NavBtnLink>
                                </NavBtn>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default ThisSection
