import React from 'react';
import { Container} from '../../../globalStyles';
import { Link, animateScroll as scroll} from 'react-scroll';
import {
    InfoSec,
    InfoRow,
    InfoColumnImage,
    Img,
    ImgWrapper
  } from './PressNote1.elements';
import img1 from '../../../images/notas/Nota1.png';
import img2 from '../../../images/notas/forbeslogo.png';


const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumnImage>
                                <ImgWrapper>
                                    <Img src={img2} alt=""/>
                                </ImgWrapper>
                        </InfoColumnImage>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <a href="https://www.forbesargentina.com/innovacion/vacunas-estos-argentinos-usan-blockchain-traslado-sea-seguro-n5365" target="_blank">
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