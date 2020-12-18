import React, {useState} from 'react';
import Video from '../../videos/Video.mp4';
import { 
    IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1,
    IntroP,
    IntroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './introSection.elements';
import { Button } from '../../globalStyles';

const IntroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type= 'video/mp4' />
            </IntroBg>
            <IntroContent>
                <IntroH1> Un nuevo estándar mundial<br/> en calidad y seguridad para salud</IntroH1>
                <IntroP>Han pasado muchas décadas sin innovar en la logística al servicio de la salud. Y sabemos que lo que no se mide, no se puede mejorar</IntroP>
                <IntroBtnWrapper>
                    <Button to="discover" onMouseEnter={onHover} onMouseLeave={onHover}
                    smooth={true}
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active">
                         Comenzar {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
        
    )
}

export default IntroSection
