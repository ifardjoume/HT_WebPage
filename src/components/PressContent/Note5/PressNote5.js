import React from 'react';
import { Container} from '../../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumnImage,
    Img,
    ImgWrapper
  } from './PressNote5.elements';
  import img1 from '../../../images/notas/Nota5.jpg'
  import img2 from '../../../images/notas/infonegocioslogo.png'


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
                                <a href="https://infonegocios.info/infotecnologia/h-trace-la-startup-argentina-y-una-nueva-forma-de-logistica" target="_blank">
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