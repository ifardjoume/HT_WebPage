import React from 'react'
import { Container} from '../../../../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper,
    List,
    ListItem
  } from '../../../../services/Samples/InfoSamples/InfoSamples.elements';
import img1 from '../../../../../images/searching.svg';


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
                                        <ListItem>Temperature (Calibrable Thermal Sensor with Simulated Inertia)</ListItem>
                                        <ListItem>Time (Lid Closing and Opening Record)</ListItem>
                                        <ListItem>DAmage (Accelerometer)</ListItem>
                                        <ListItem>Loss of Mtra (Lid Opening)</ListItem>
                                        <ListItem>Damaged Samples (Vibrations)</ListItem>
                                        <ListItem>Alert Settings</ListItem>
                                    </List>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper>
                                    <Img src={img1} alt="product" />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </>            
        
    )
}

export default InfoSamples
