import React from 'react'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    TopLine
} from './THISProcessSection.elements';
import { Container} from '../../../../globalStyles';
import { FormattedMessage } from "react-intl";

const THISProcessSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                <Heading>
                    <FormattedMessage id="THISProcessSectionTitle" defaultMessage="How T.H.I.S Works" />
                </Heading>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionOriginSubtitle" defaultMessage="Origin" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionOriginDescription" defaultMessage="Using our app, smart packaging is turned on for data logging to begin." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionDuringSubtitle" defaultMessage="During Transport" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionDuringDescription" defaultMessage="The packaging records all variables in a dual way: local (in internal memory) and sending to the cloud. This allows an extra level of reinsurance in the event of any eventuality and real-time monitoring from the online control dashboard. In situations such as organ donation, having a constant record of geolocation allows the correct preparation of the medical team in charge of the transplant with the necessary prior time, and cold chain traceability informs if the organ suffered tissue degradation due to bad temperatures." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionDestinationSubtitle" defaultMessage="Destination" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionDestinationDescription" defaultMessage="The user, through our app, finish the transport process, instantly receiving the report with its information. Such report includes visualization of the different data collected by the sensors, a detailed list of the transported objects, and other information that is relevant to the user." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionAfterSubtitle" defaultMessage="After Transport" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionAfterDescription" defaultMessage="The entire set of trips made can be analyzed in detail through a control panel that can be accessed from any computer or mobile device. At the same time, this information feeds a machine learning model that allows predicting future errors and proposing improvements to the logistics process" />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}


export default THISProcessSection
