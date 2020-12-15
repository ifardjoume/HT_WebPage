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
                <IntroH1> Welcome to the new Standard</IntroH1>
                <IntroP>The time has come to join the future for healthcare</IntroP>
                <IntroBtnWrapper>
                    <Button to="discover" onMouseEnter={onHover} onMouseLeave={onHover}>
                         Begin {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
        
    )
}

export default IntroSection
