import React from 'react';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
} from './THISInfoSection.elements';
import { Container} from '../../../globalStyles';
import { FormattedMessage } from "react-intl";
//import RenderImage from '../../../images/';

const THISInfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading><FormattedMessage id="THISSectionTitle" defaultMessage="T.H.I.S. System" /></Heading>
                                <Subtitle>
                                    <FormattedMessage id="THISInfoSectionDescription" defaultMessage="T.H.I.S. is the world's most advanced smart logistics system for healthcare. This total traceability solution includes a combination of PCMs (Phase Change Materials) along with a series of sensors that report information that no other system can provide." />
                                </Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                            {/* <Img src={RenderImage}/> */}
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default THISInfoSection

