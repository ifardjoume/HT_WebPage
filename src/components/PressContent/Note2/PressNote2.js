import React from 'react';
import { Container} from '../../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumnImage,
    Img,
    ImgWrapper
  } from './PressNote2.elements';
import img1 from '../../../images/notas/Nota2.jpg'
import img2 from '../../../images/notas/perfillogo.png'


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
                                <a href="https://www.perfil.com/noticias/reperfilar/una-start-up-argentina-diseno-una-innovadora-forma-de-transportar-vacunas.phtml" target="_blank">
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