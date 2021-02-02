import React from 'react'
import { Container} from '../../../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    List,
    ListItem
  } from './InfoSamples.elements';
import PieChart from '../GraphSection/PieChart';
import { FormattedMessage } from "react-intl";


const InfoSamples = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading><FormattedMessage id="InfoSecTitleSamples" defaultMessage="Biological Samples" /></Heading>
                                    <Subtitle> 
                                    <FormattedMessage id="InfoSecDescriptionSamples" defaultMessage="We know that 70% of errors occur in the preanalytical stage.
                                        Our study shows that 90% of respondents are concerned about:" />
                                    </Subtitle>
                                    <List>
                                        <ListItem><FormattedMessage id="InfoSecBulletSamples1" defaultMessage="Temperature" /></ListItem>
                                        <ListItem><FormattedMessage id="InfoSecBulletSamples2" defaultMessage="Time" /></ListItem>
                                        <ListItem><FormattedMessage id="InfoSecBulletSamples3" defaultMessage="Shaking / Mistreatment" /></ListItem>
                                        <ListItem><FormattedMessage id="InfoSecBulletSamples4" defaultMessage="Damaged Samples" /></ListItem>
                                        <ListItem><FormattedMessage id="InfoSecBulletSamples5" defaultMessage="Alert Settings" /></ListItem>
                                    </List>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper>
                                    <PieChart />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </>            
        
    )
}

export default InfoSamples
