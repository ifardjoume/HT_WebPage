import React, {useState} from 'react';
import Navbar from '../../components/navBarDefault/NavBar';
import SideBar from '../../components/sideBarDefault/sideBar';
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
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle= {toggle}/>
        <RenderOrgans/>
        <InfoOrgans/>
        <IconOrgans/>
        <Footer/>
        </>
    )
}

export default Organs