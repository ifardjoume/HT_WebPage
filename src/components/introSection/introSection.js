import React from 'react';
import Video from '../../videos/gradillas.mp4';
import { 
    IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1
} from './introSection.elements';
import { FormattedMessage } from "react-intl";

const IntroSection = () => {
    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type= 'video/mp4' />
            </IntroBg>
            <IntroContent>
                <IntroH1 classname="App-header"> <b><FormattedMessage id="VideoTitlePart1" defaultMessage="THE NEW GLOBAL STANDARD" /><br></br><br></br> <FormattedMessage id="VideoTitlePart2" defaultMessage="OF QUALITY ASSURANCE" /><br></br><br></br> <FormattedMessage id="VideoTitlePart3" defaultMessage="IN HEALTHCARE" /></b></IntroH1>               
            </IntroContent>
        </IntroContainer>
        
    )
}

export default IntroSection
