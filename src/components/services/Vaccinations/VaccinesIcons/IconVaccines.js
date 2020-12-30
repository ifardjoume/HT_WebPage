import React from 'react';
import {
    AspectContainer,
    AspectWrapper,
    AspectList,
    ListItem,
    IconImage,
    ListIcon,
    PdfDiv,
    PdfH1
} from './IconVaccines.elements'
import temperatura from '../../../../images/icons/temperatura.png';
import { FaRegFilePdf } from 'react-icons/fa'
const IconVaccines = () => {
    return (
        <>
        <AspectContainer>
            <AspectWrapper>
                <AspectList>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Geolocalización</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Mantenimiento<br/> Isotérmico Personalizado</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Empaque Inteligente<br/> Anti-derrame</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Temperatura</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Apertura de Tapa</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Alertas en<br/> Tiempo Real</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Golpes y Caída Libre</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Vibración</ListItem>
                <ListItem><ListIcon><IconImage src={temperatura}/></ListIcon>Registro de<br/> Aceleración</ListItem>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
         <PdfDiv>
            <FaRegFilePdf size={64}/>
            <PdfH1>Pdf con Performance Técnica de THIS</PdfH1>
        </PdfDiv>
     </>
    )
}

export default IconVaccines
