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
  } from '../../../../services/Organs/InfoOrgans/InfoOrgans.elements';
import img1 from '../../../../../images/searching.svg';


const InfoOrgans = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Organs</Heading>
                                    <Subtitle> 
                                    Our mission is to create a new standard for the preservation and transport of organs with reliable records that allow them to certify their quality and effectiveness, thus improving patient outcomes around the world. This first-of-its-kind system provides a temperature controlled environment, real-time monitoring and full traceability.
                                     Designed to be easy to use in fast-paced and stressful environments where there is no room for mistakes.
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperature (Calibrable Thermal Sensor with Simulated Inertia)</ListItem>
                                        <ListItem>Real Time Tracking (GPS)</ListItem>
                                        <ListItem>Damage (Accelerometer)</ListItem>
                                        <ListItem>Transport Securing (Lid Opening)</ListItem>
                                        <ListItem>Damages due to improper transport (Vibrations)</ListItem>
                                        <ListItem>Alert Settings</ListItem>
                                    </List>
                                    <Subtitle>
                                    THIS is the solution to the preservation and transport of organs in a safe and efficient way with real-time monitoring that allows optimizing logistics,
                                     especially when the organ arrives in the operating room.
                                    </Subtitle>
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

export default InfoOrgans
