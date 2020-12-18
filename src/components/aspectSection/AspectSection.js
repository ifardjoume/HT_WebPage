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


const AspectSection = () => {
    return (
        <AspectContainer>
            <AspectWrapper>
                <AspectList>
                <ListItem><ListIcon><FaMapMarkerAlt/></ListIcon>Geolocalización</ListItem>
                <ListItem><ListIcon><FaTemperatureLow/></ListIcon>Mantenimiento Isotérmico personalizado</ListItem>
                <ListItem><ListIcon><GiSpill/></ListIcon>Empaque Inteligente Anti-derrame</ListItem>
                </AspectList>
                <Separator />
                <AspectList>
                <ListItem><ListIcon><GrNotes/></ListIcon>Registro de Temperatura</ListItem>
                <ListItem><ListIcon><FaBoxOpen/></ListIcon>Registro de Apertura de Tapa</ListItem>
                <ListItem><ListIcon><BiTime/></ListIcon>Alertas en Tiempo Real</ListItem>
                </AspectList>
                <Separator />
                <AspectList>
                <ListItem><ListIcon><GiHeavyFall/></ListIcon>Registro de Golpes y Caída Libre</ListItem>
                <ListItem><ListIcon><WiEarthquake/></ListIcon>Registro de Vibración</ListItem>
                <ListItem><ListIcon><GiSpeedometer/></ListIcon>Registro de Aceleración</ListItem>
                </AspectList>
            </AspectWrapper>
        </AspectContainer>
    )
}

export default AspectSection
