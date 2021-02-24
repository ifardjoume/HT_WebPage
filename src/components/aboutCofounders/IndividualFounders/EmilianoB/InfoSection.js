import React from 'react';
import { Container} from '../../../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumnText,
    InfoColumnImage,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
  } from './InfoSection.elements';
import img1 from '../../../../images/personal_info.svg'
import { FormattedMessage } from "react-intl";


const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumnText>
                            <TextWrapper>
                            <Heading><FormattedMessage id="EmilianoB Title" defaultMessage="Emiliano Buitrago" /></Heading>
                                <Subtitle><FormattedMessage id="EmilianoB Description1" defaultMessage="Insert Description1 Here" /><br/><br/>
                                <FormattedMessage id="EmilianoB Description2" defaultMessage="Insert Description2 Here"/></Subtitle>
                            </TextWrapper>
                        </InfoColumnText>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <Img src={img1} alt="CofounderImage"/>
                            </ImgWrapper>
                        </InfoColumnImage>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection