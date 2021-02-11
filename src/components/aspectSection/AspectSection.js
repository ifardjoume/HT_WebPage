import React from 'react'
import {
    AspectContainer,
    AspectWrapper,
    AspectList,
    ListItem,
    ListItemBottom,
    IconImage,
    ListIcon,
    IconImageGeo,
} from './AspectSection.elements'
import geolocalizacion from '../../images/icons/geolocalizacion.png';
import vibraciones from '../../images/icons/vibracion.png';
import aceleracion from '../../images/icons/aceleracion2.png';
import alertaTiempoReal from '../../images/icons/alert.png';
import antiderrame from '../../images/icons/antiderrame.png';
import aperturaTapa from '../../images/icons/aperturaTapa2.png';
import golpes from '../../images/icons/golpes2.png';
import isotermico from '../../images/icons/isotermico2.png';
import temperatura from '../../images/icons/temperatura2.png';
import dron from '../../images/icons/droneready.png';
import { FormattedMessage } from "react-intl";


const AspectSection = () => {
    return (
        <AspectContainer>
            <AspectWrapper>
                <AspectList>
                <ListItem><ListIcon><IconImageGeo src={geolocalizacion}/></ListIcon><FormattedMessage id="AspectTitle1" defaultMessage="Geolocation" /></ListItem>
                <ListItem><ListIcon><IconImage src={isotermico}/></ListIcon><FormattedMessage id="AspectTitle2Pt1" defaultMessage="Custom Isothermal" /><br/><FormattedMessage id="AspectTitle2Pt2" defaultMessage="Maintenance" /></ListItem>
                <ListItem><ListIcon><IconImage src={antiderrame}/></ListIcon><FormattedMessage id="AspectTitle3Pt1" defaultMessage="Smart Leak Proof" /><br/><FormattedMessage id="AspectTitle3Pt2" defaultMessage="Packing" /></ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon><FormattedMessage id="AspectTitle4Pt1" defaultMessage="Temperature" /><br/><FormattedMessage id="AspectTitle4Pt2" defaultMessage="Log" /></ListItem>
                <ListItem><ListIcon><IconImage src={aperturaTapa}/></ListIcon><FormattedMessage id="AspectTitle5Pt1" defaultMessage="Lid Opening" /><br/><FormattedMessage id="AspectTitle5Pt2" defaultMessage="Log" /></ListItem>
                </AspectList>
                <AspectList>
                <ListItemBottom><ListIcon><IconImage src={alertaTiempoReal}/></ListIcon><FormattedMessage id="AspectTitle6Pt1" defaultMessage="Real Time" /><br/><FormattedMessage id="AspectTitle6Pt2" defaultMessage="Alerts" /></ListItemBottom>
                <ListItemBottom><ListIcon><IconImage src={golpes}/></ListIcon><FormattedMessage id="AspectTitle7Pt1" defaultMessage="Free Fall" /><br/><FormattedMessage id="AspectTitle7Pt2" defaultMessage="Log" /></ListItemBottom>
                <ListItemBottom><ListIcon><IconImage src={vibraciones}/></ListIcon><FormattedMessage id="AspectTitle8Pt1" defaultMessage="Vibration" /><br/><FormattedMessage id="AspectTitle8Pt2" defaultMessage="Log" /></ListItemBottom>
                <ListItemBottom><ListIcon><IconImage src={aceleracion}/></ListIcon><FormattedMessage id="AspectTitle9Pt1" defaultMessage="Acceleration" /><br/><FormattedMessage id="AspectTitle9Pt2" defaultMessage="Log" /></ListItemBottom>
                <ListItemBottom><ListIcon><IconImage src={dron}/></ListIcon><FormattedMessage id="AspectTitle10Pt1" defaultMessage="Dron" /><br/><FormattedMessage id="AspectTitle10Pt2" defaultMessage="Ready" /></ListItemBottom>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
    )
}

export default AspectSection
