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
  } from './InfoSection.elements';
import img1 from '../../../images/Conjunto.png';
const InfoSection = () => {
    return (
        <>
            <InfoSec id="discover">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>Llegó el momento de sumarse al futuro</Heading>
                                <Subtitle>Para eso desarrollamos THIS (Total Healthcare Insight Solution), una solución integral de bajo costo que combina ciencia de datos, IoT (Internet de las cosas) y un sistema de sensorización con control térmico que permite la personalización del objeto transportado.Han pasado muchas décadas sin innovar en la logística al servicio de la salud. Y sabemos que lo que no se mide, no se puede mejorar.</Subtitle>
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
