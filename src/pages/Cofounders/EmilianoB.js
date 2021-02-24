import React,{useState} from 'react'
import Navbar from '../../components/navBarDefault/NavBar';
import SideBar from '../../components/sideBarDefault/sideBar';
import Footer from '../../components/footerDefault/Footer';
import InfoSec from '../../components/aboutCofounders/IndividualFounders/EmilianoB/InfoSection';


const EmilianoB = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle= {toggle}/>
            <InfoSec />
            <Footer />
        </>
    )
}

export default EmilianoB
