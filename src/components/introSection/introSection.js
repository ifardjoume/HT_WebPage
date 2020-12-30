import React from 'react';
import Video from '../../videos/gradillas.mp4';
import { 
    IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1
} from './introSection.elements';


const IntroSection = () => {
    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type= 'video/mp4' />
            </IntroBg>
            <IntroContent>
                <IntroH1 classname="App-header"> <b>EL NUEVO ESTÁNDAR GLOBAL<br></br><br></br> EN CALIDAD Y SEGURIDAD <br></br><br></br> PARA LA SALUD</b></IntroH1>               
            </IntroContent>
        </IntroContainer>
        
    )
}

export default IntroSection
