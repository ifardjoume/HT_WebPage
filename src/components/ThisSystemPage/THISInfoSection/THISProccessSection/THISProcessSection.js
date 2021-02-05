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
                    <FormattedMessage id="THISProcessSectionTitle" defaultMessage="How It Works" />
                </Heading>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionOriginSubtitle" defaultMessage="Before Departure" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionOriginDescription" defaultMessage="With our app, the smart packaging is activated and starts registering/recording data." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionDuringSubtitle" defaultMessage="During Transportation" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionDuringDescription" defaultMessage="The packaging records all data dually/in two ways: locally (in the internal memory of the device) and in the cloud. This provides an extra level of reassurance in the event of any unforeseen/unexpected incidents/contingencies and real-time monitoring from the online dashboard. In the case of organ donations, real-time geolocation allows the medical team in charge of the transplant to prepare correctly and with the appropriate time, while cold-chain traceability registers any unexpected changes in temperature that may cause tissue damage." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionDestinationSubtitle" defaultMessage="On Arrival" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionDestinationDescription" defaultMessage="Using our app, the user registers the arrival of the package and, instantly, receives a report with its information. The report includes data visualization/visualization of the data recorded by the sensors, a detailed list of the transported items and other relevant information." />
                                </Subtitle>    
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                <FormattedMessage id="THISProcessSectionAfterSubtitle" defaultMessage="After Transportation" />
                                </TopLine>
                                <Subtitle>
                                    <FormattedMessage id="THISProcessSectionAfterDescription" defaultMessage="All shipments can be analyzed in detail with our dashboard/control panel, which can be accessed from any computer or mobile device. This information, in turn, feeds a machine-learning model that predicts future errors y suggests logistics improvements / improvements to the logistics process." />
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
