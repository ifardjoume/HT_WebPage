import React,{useState} from 'react'
import Navbar from '../../components/navBarDefault/NavBar';
import SideBar from '../../components/sideBarDefault/sideBar';
import Footer from '../../components/footerDefault/Footer';
import InfoSec from '../../components/PressContent/Note1/PressNote1';
import InfoSec2 from '../../components/PressContent/Note2/PressNote2';
import InfoSec3 from '../../components/PressContent/Note3/PressNote3';
import InfoSec4 from '../../components/PressContent/Note4/PressNote4';
import InfoSec5 from '../../components/PressContent/Note5/PressNote5';


const IvanF = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle= {toggle}/>
            <InfoSec />
            <InfoSec2 />
            <InfoSec3 />
            <InfoSec4 />
            <InfoSec5 />

            <Footer />
        </>
    )
}

export default IvanF
