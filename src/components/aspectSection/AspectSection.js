import React from 'react'
import {
    AspectContainer,
    AspectWrapper,
    AspectList,
    ListItem,
    Separator,
    ListIcon
} from './AspectSection.elements'
import { 
    FaMapMarkerAlt,
    FaTemperatureLow,
    FaBoxOpen

} from 'react-icons/fa';
import { 
    GiSpill,
    GiHeavyFall,
    GiSpeedometer
} from 'react-icons/gi';
import { 
    GrNotes
} from 'react-icons/gr';
import { 
    BiTime
} from 'react-icons/bi';
import { 
    WiEarthquake
} from 'react-icons/wi';

const sizeVariable = 64;
const AspectSection = () => {
    return (
        <AspectContainer>
            <AspectWrapper>
                <AspectList>
                <ListItem><ListIcon><FaMapMarkerAlt size={sizeVariable}/></ListIcon>Geolocalización</ListItem>
                <ListItem><ListIcon><FaTemperatureLow size={sizeVariable}/></ListIcon>Mantenimiento<br/> Isotérmico personalizado</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><GiSpill size={sizeVariable}/></ListIcon>Empaque Inteligente<br/> Anti-derrame</ListItem>
                <ListItem><ListIcon><GrNotes size={sizeVariable}/></ListIcon>Registro de<br/> Temperatura</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><FaBoxOpen size={sizeVariable}/></ListIcon>Registro de<br/> Apertura de Tapa</ListItem>
                <ListItem><ListIcon><BiTime size={sizeVariable}/></ListIcon>Alertas en<br/> Tiempo Real</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><GiHeavyFall size={sizeVariable}/></ListIcon>Registro de<br/> Golpes y Caída Libre</ListItem>
                <ListItem><ListIcon><WiEarthquake size={sizeVariable}/></ListIcon>Registro de<br/> Vibración</ListItem>
                </AspectList>
                <AspectList>
                <ListItem><ListIcon><GiSpeedometer size={sizeVariable}/></ListIcon>Registro de<br/> Aceleración</ListItem>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
    )
}

export default AspectSection
