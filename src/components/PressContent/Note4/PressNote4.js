import React from 'react';
import { Container} from '../../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumnImage,
    Img,
    ImgWrapper
  } from './PressNote4.elements';
import img1 from '../../../images/notas/Nota4.jpg'
import img2 from '../../../images/notas/infobaelogo.png'



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
                                <a href="https://www.infobae.com/america/tecno/2021/03/23/argentinos-crearon-una-solucion-de-logistica-con-tecnologia-para-el-traslado-de-vacunas-y-otros-medicamentos/" target="_blank">
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