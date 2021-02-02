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
} from './IconSamples.elements';
import { FormattedMessage } from "react-intl";
import temperatura from '../../../../images/icons/temperatura.png';
import geolocalizacion from '../../../../images/icons/geolocalizacion.png';
import vibraciones from '../../../../images/icons/vibraciones.png';
import aceleracion from '../../../../images/icons/aceleracion.png';
import alertaTiempoReal from '../../../../images/icons/alertaTiempoReal.png';
import antiderrame from '../../../../images/icons/antiderrame.png';
import aperturaTapa from '../../../../images/icons/aperturaTapa.png';
import golpes from '../../../../images/icons/golpes.png';
import isotermico from '../../../../images/icons/isotermico.png';
//import { FaRegFilePdf } from 'react-icons/fa'
const IconSamples = () => {
    return (
        <>
        <AspectContainer>
            <AspectWrapper>
            <AspectList>
                <ListItem><ListIcon><IconImage src={geolocalizacion}/></ListIcon><FormattedMessage id="AspectTitle1" defaultMessage="Geolocation" /></ListItem>
                <ListItem><ListIcon><IconImage src={isotermico}/></ListIcon><FormattedMessage id="AspectTitle2Pt1" defaultMessage="Custom Isothermal" /><br/><FormattedMessage id="AspectTitle2Pt2" defaultMessage="Maintenance" /></ListItem>
                <ListItem><ListIcon><IconImage src={antiderrame}/></ListIcon><FormattedMessage id="AspectTitle3Pt1" defaultMessage="Smart Leak Proof" /><br/><FormattedMessage id="AspectTitle3Pt2" defaultMessage="Packing" /></ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon><FormattedMessage id="AspectTitle4Pt1" defaultMessage="Temperature" /><br/><FormattedMessage id="AspectTitle4Pt2" defaultMessage="Log" /></ListItem>
                <ListItem><ListIcon><IconImage src={aperturaTapa}/></ListIcon><FormattedMessage id="AspectTitle5Pt1" defaultMessage="Lid Opening" /><br/><FormattedMessage id="AspectTitle5Pt2" defaultMessage="Log" /></ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><IconImage src={alertaTiempoReal}/></ListIcon><FormattedMessage id="AspectTitle6Pt1" defaultMessage="Real Time" /><br/><FormattedMessage id="AspectTitle6Pt2" defaultMessage="Alerts" /></ListItem>
                <ListItem><ListIcon><IconImage src={golpes}/></ListIcon><FormattedMessage id="AspectTitle7Pt1" defaultMessage="Free Fall" /><br/><FormattedMessage id="AspectTitle7Pt2" defaultMessage="Log" /></ListItem>
                <ListItem><ListIcon><IconImage src={vibraciones}/></ListIcon><FormattedMessage id="AspectTitle8Pt1" defaultMessage="Vibration" /><br/><FormattedMessage id="AspectTitle8Pt2" defaultMessage="Log" /></ListItem>
                <ListItem><ListIcon><IconImage src={aceleracion}/></ListIcon><FormattedMessage id="AspectTitle9Pt1" defaultMessage="Acceleration" /><br/><FormattedMessage id="AspectTitle9Pt2" defaultMessage="Log" /></ListItem>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
         {/* <PdfDiv>
            <FaRegFilePdf size={64}/>
            <PdfH1>Pdf con Performance Técnica de THIS</PdfH1>
        </PdfDiv> */}
     </>
    )
}

export default IconSamples
