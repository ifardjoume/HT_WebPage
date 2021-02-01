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
} from './IconSamples.elements'
import temperatura from '../../../../images/icons/temperatura.png';
import geolocalizacion from '../../../../images/icons/geolocalizacion.png';
import vibraciones from '../../../../images/icons/vibraciones.png';
import aceleracion from '../../../../images/icons/aceleracion.png';
import alertaTiempoReal from '../../../../images/icons/alertaTiempoReal.png';
import antiderrame from '../../../../images/icons/antiderrame.png';
import aperturaTapa from '../../../../images/icons/aperturaTapa.png';
import golpes from '../../../../images/icons/golpes.png';
import isotermico from '../../../../images/icons/isotermico.png';
import { FaRegFilePdf } from 'react-icons/fa'
const IconSamples = () => {
    return (
        <>
        <AspectContainer>
            <AspectWrapper>
                <AspectList>
                <ListItem><ListIcon><IconImage src={geolocalizacion}/></ListIcon>Geolocalización</ListItem>
                <ListItem><ListIcon><IconImage src={isotermico}/></ListIcon>Mantenimiento<br/> Isotérmico Personalizado</ListItem>
                <ListItem><ListIcon><IconImage src={antiderrame}/></ListIcon>Empaque Inteligente<br/> Anti-derrame</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Temperatura</ListItem>
                <ListItem><ListIcon><IconImage src={aperturaTapa}/></ListIcon>Registro de<br/> Apertura de Tapa</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><IconImage src={alertaTiempoReal}/></ListIcon>Alertas en<br/> Tiempo Real</ListItem>
                <ListItem><ListIcon><IconImage src={golpes}/></ListIcon>Registro de<br/> Golpes y Caída Libre</ListItem>
                <ListItem><ListIcon><IconImage src={vibraciones}/></ListIcon>Registro de<br/> Vibración</ListItem>
                <ListItem><ListIcon><IconImage src={aceleracion}/></ListIcon>Registro de<br/> Aceleración</ListItem>
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
