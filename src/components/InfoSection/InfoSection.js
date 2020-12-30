import React from 'react';
import { Container} from '../../globalStyles';
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
import img1 from '../../images/Conjunto.png';
const InfoSection = () => {
    return (
        <>
            <InfoSec id="discover">
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>Llegó el momento de sumarse al futuro</Heading>
                                <Subtitle> En la industria de la salud, desde hace muchas décadas no se ve un avance tecnológico en la lógistica del transporte. Y sabemos que lo que no se mide, no se puede mejorar. <br/><br/>
                                    Por eso desarrollamos THIS (Total Healthcare Insight Solution), una solución integral de bajo costo que combina ciencia de datos, IoT (Internet de las cosas) y un sistema de sensores con control térmico que permite la personalización del transporte de cada objeto/envío.</Subtitle>
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
