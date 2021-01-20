import React,{useState} from 'react';
import Navbar from '../../../components/EnglishComps/services/Vaccinations/navBar/NavBar';
import SideBar from '../../../components/EnglishComps/services/Vaccinations/Sidebar/sideBar';
import Footer from '../../../components/EnglishComps/footer/Footer';
import InfoVaccines from '../../../components/EnglishComps/services/Vaccinations/InfoVaccines/InfoVaccines';
import VaccinesIcons from '../../../components/EnglishComps/services/Vaccinations/VaccinesIcons/IconVaccines';
import RenderVaccines from '../../../components/EnglishComps/services/Vaccinations/RenderVaccines/RenderVaccines';

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