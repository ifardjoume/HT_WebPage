import React, {useState} from 'react';
import Navbar from '../../components/navbar/NavBarDefault';
import Footer from '../../components/footer/Footer';
import InfoOrgans from '../../components/services/Organs/InfoOrgans/InfoOrgans';
import IconOrgans from '../../components/services/Organs/IconOrgans/IconOrgans';
import RenderOrgans from '../../components/services/Organs/RenderOrgans/RenderOrgans';

const Organs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
        <Navbar toggle= {toggle}/>
        <InfoOrgans/>
        <IconOrgans/>
        <RenderOrgans/>
        <Footer/>
        </>
    )
}

export default Organs