import React,{useState} from 'react';
import Navbar from '../../components/services/Vaccinations/navBar/NavBar';
import SideBar from '../../components/services/Vaccinations/Sidebar/sideBar'
import Footer from '../../components/footer/Footer';
import InfoVaccines from '../../components/services/Vaccinations/InfoVaccines/InfoVaccines';
import VaccinesIcons from '../../components/services/Vaccinations/VaccinesIcons/IconVaccines';
import RenderVaccines from '../../components/services/Vaccinations/RenderVaccines/RenderVaccines';

const Vaccinations = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle= {toggle}/>
        <RenderVaccines />
        <InfoVaccines />
        <VaccinesIcons />
        <Footer/>
        </>
    )
}

export default Vaccinations