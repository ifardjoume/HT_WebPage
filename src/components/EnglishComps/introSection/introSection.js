import React from 'react';
import Video from '../../../videos/gradillas.mp4';
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
                <IntroH1 classname="App-header"> <b>THE NEW GLOBAL STANDARD<br></br><br></br> IN QUALITY ASSURANCE <br></br><br></br> FOR HEALTHCARE</b></IntroH1>               
            </IntroContent>
        </IntroContainer>
        
    )
}

export default IntroSection
