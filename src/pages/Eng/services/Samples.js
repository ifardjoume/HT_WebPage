import React, {useState} from 'react';
import Navbar from '../../../components/navbar/NavBarDefault';
import Footer from '../../../components/EnglishComps/footer/Footer';
import InfoSamples from '../../../components/EnglishComps/services/Samples/InfoSamples/InfoSamples';
import TableSamples from '../../../components/EnglishComps/services/Samples/TableSamples/TableSamples';
import IconSamples from '../../../components/EnglishComps/services/Samples/IconSamples/IconSamples';
import RenderSample from '../../../components/EnglishComps/services/Samples/RenderSample/RenderSample';

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