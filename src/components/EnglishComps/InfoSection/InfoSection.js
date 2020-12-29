import React from 'react';
import { Container} from '../../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
  } from '../../InfoSection/InfoSection.elements';
import img1 from '../../../images/Conjunto.png';
const InfoSection = () => {
    return (
        <>
            <InfoSec id="discover">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>Its time to join the future.</Heading>
                                <Subtitle>  Many decades have passed without innovating in logistics at the service of health. And we know that what is not measured cannot be improved. <br/><br/>
                                    For that we developed THIS (Total Healthcare Insight Solution), a comprehensive low-cost solution that combines data science, IoT (Internet of Things) and a sensorization system with thermal control that allows the personalization of the transported object.</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={img1} alt="product" />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection