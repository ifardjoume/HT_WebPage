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
import img2 from '../../../images/notas/diarioconvoslogo.png'

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
                                <a href="https://diarioconvos.com/2021/04/03/tres-cientificos-argentinos-desarrollaron-un-empaque-inteligente-para-trasladar-vacunas-medicamentos-y-organos/" target="_blank">
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