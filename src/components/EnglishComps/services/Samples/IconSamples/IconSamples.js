import React from 'react';
import {
    AspectContainer,
    AspectWrapper,
    AspectList,
    ListItem,
    IconImage,
    ListIcon,
    //PdfDiv,
    //PdfH1
} from '../../../../services/Samples/IconSamples/IconSamples.elements'
import temperatura from '../../../../../images/icons/temperatura.png';
import geolocalizacion from '../../../../../images/icons/geolocalizacion.png';
import vibraciones from '../../../../../images/icons/vibraciones.png';
import aceleracion from '../../../../../images/icons/aceleracion.png';
import alertaTiempoReal from '../../../../../images/icons/alertaTiempoReal.png';
import antiderrame from '../../../../../images/icons/antiderrame.png';
import aperturaTapa from '../../../../../images/icons/aperturaTapa.png';
import golpes from '../../../../../images/icons/golpes.png';
import isotermico from '../../../../../images/icons/isotermico.png';
//import { FaRegFilePdf } from 'react-icons/fa';
const IconSamples = () => {
    return (
        <>
        <AspectContainer>
            <AspectWrapper>
            <AspectList>
                <ListItem><ListIcon><IconImage src={geolocalizacion}/></ListIcon>Geolocation</ListItem>
                <ListItem><ListIcon><IconImage src={isotermico}/></ListIcon>Custom Isothermal <br/> Maintenance</ListItem>
                <ListItem><ListIcon><IconImage src={antiderrame}/></ListIcon>Smart Leak Proof <br/> Packing</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Temperature<br/>Log</ListItem>
                <ListItem><ListIcon><IconImage src={aperturaTapa}/></ListIcon>Lid Opening<br/>Log</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><IconImage src={alertaTiempoReal}/></ListIcon>Real Time<br/>Alerts</ListItem>
                <ListItem><ListIcon><IconImage src={golpes}/></ListIcon>Free Fall<br/>Log</ListItem>
                <ListItem><ListIcon><IconImage src={vibraciones}/></ListIcon>Vibration<br/>Log</ListItem>
                <ListItem><ListIcon><IconImage src={aceleracion}/></ListIcon>Acceleration<br/>Log</ListItem>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
        {/*  <PdfDiv>
            <FaRegFilePdf size={64}/>
            <PdfH1>THIS Technical Performance</PdfH1>
        </PdfDiv> */}
     </>
    )
}

export default IconSamples
