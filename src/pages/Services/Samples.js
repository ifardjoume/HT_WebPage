import React, {useState} from 'react';
import Navbar from '../../components/navbar/NavBarDefault';
import Footer from '../../components/footer/Footer';
import InfoSamples from '../../components/services/Samples/InfoSamples/InfoSamples';
import TableSamples from '../../components/services/Samples/TableSamples/TableSamples';
import IconSamples from '../../components/services/Samples/IconSamples/IconSamples';
import RenderSample from '../../components/services/Samples/RenderSample/RenderSample';

const Samples = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
        <Navbar toggle= {toggle}/>
        <RenderSample />
        <InfoSamples />
        <TableSamples />
        <IconSamples />
        <Footer/>
        </>
    )
}

export default Samples