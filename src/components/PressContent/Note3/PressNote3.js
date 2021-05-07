import React from 'react';
import { Container} from '../../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumnImage,
    Img,
    ImgWrapper
  } from './PressNote3.elements';
import img1 from '../../../images/notas/Nota3.png'
import img2 from '../../../images/notas/Clarín_logo.svg.png'

const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <Img src={img2} alt="CofounderImage"/>
                            </ImgWrapper>
                        </InfoColumnImage>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <a href="https://www.clarin.com/economia/nueva-apuesta-banquero-agroindustria_0_q9EaUcf-I.html" target="_blank">
                                    <Img src={img1} alt="PressNote"/>
                                </a>
                            </ImgWrapper>
                        </InfoColumnImage>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection