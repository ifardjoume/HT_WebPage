import React from 'react'
import { Container} from '../../../../../globalStyles';
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
  } from '../../../../services/Samples/InfoSamples/InfoSamples.elements';
import PieChart from '../GraphSection/PieChart'

const InfoSamples = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Biological Samples</Heading>
                                    <Subtitle> 
                                    We know that 70% of errors occur in the preanalytical stage.
                                        Our study shows that 90% of respondents are concerned about:
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperature</ListItem>
                                        <ListItem>Time</ListItem>
                                        <ListItem>Shaking / Mistreatment</ListItem>
                                        <ListItem>Damaged Samples</ListItem>
                                        <ListItem>Alert Settings</ListItem>
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
