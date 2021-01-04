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
  } from '../../../../services/Vaccinations/InfoVaccines/InfoVaccines.elements';
import img1 from '../../../../../images/searching.svg';


const InfoVaccines = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Vaccines</Heading>
                                    <Subtitle> 
                                    The latest developments showed the importance of maintaining the cold chain, ensuring the quality and safety of the vaccines throughout the transportation, with reliable records that allow the quality and effectiveness of the vaccines to be certified.
                                     THIS is the solution to the safe and efficient distribution of vaccines and all types of medicines that require cold chain and real-time monitoring, ensuring during transport:
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperature (Calibrable Thermal Sensor with Simulated Inertia)</ListItem>
                                        <ListItem>Real Time Tracking (GPS)</ListItem>
                                        <ListItem>Damage (Accelerometer)</ListItem>
                                        <ListItem>Cargo Securing (Lid Opening)</ListItem>
                                        <ListItem>Damages by Transport (Vibrations)</ListItem>
                                        <ListItem>Alert Settings </ListItem>
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

export default InfoVaccines
