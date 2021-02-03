import React, {useState} from 'react';
import Navbar from '../../components/navBarDefault/NavBar';
import SideBar from '../../components/sideBarDefault/sideBar';
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
        <SideBar isOpen={isOpen} toggle={toggle} />
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