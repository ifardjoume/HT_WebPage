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
import img1 from '../../../../images/javierc.jpeg'
import { FormattedMessage } from "react-intl";


const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumnText>
                            <TextWrapper>
                                <Heading><FormattedMessage id="JavierC Title" defaultMessage="Javier Cuello" /></Heading>
                                <Subtitle><FormattedMessage id="JavierC Description1" defaultMessage="Insert Description1 Here" /><br/><br/>
                                <FormattedMessage id="JavierC Description2" defaultMessage="Insert Description2 Here"/></Subtitle>
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