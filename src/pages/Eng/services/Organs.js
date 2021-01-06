import React, {useState} from 'react';
import Navbar from '../../../components/EnglishComps/services/Organs/navBar/NavBar';
import Footer from '../../../components/EnglishComps/footer/Footer';
import InfoOrgans from '../../../components/EnglishComps/services/Organs/InfoOrgans/InfoOrgans';
import IconOrgans from '../../../components/EnglishComps/services/Organs/IconOrgans/IconOrgans';
import RenderOrgans from '../../../components/EnglishComps/services/Organs/RenderOrgans/RenderOrgans';

const Organs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
        <Navbar toggle= {toggle}/>
        <RenderOrgans/>
        <InfoOrgans/>
        <IconOrgans/>
        <Footer/>
        </>
    )
}

export default Organs