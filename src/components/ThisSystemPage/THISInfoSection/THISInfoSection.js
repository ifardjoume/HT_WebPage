import React from 'react';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
} from './THISInfoSection.elements';
import { Container} from '../../../globalStyles';
import { FormattedMessage } from "react-intl";
//import RenderImage from '../../../images/';

const THISInfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading><FormattedMessage id="THISSectionTitle" defaultMessage="T.H.I.S. System" /></Heading>
                                <Subtitle>
                                    <FormattedMessage id="THISInfoSectionDescription" defaultMessage="With THIS you will not only receive unique information for logistics analysis and improvement, but also follow/monitor cold-chain integrity and package geolocation in real time, get incident alerts if the package is open, hit or mishandled, and get a report of how each item is shipped and how it is delivered at the destination." />
                                </Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                            {/* <Img src={RenderImage}/> */}
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default THISInfoSection

