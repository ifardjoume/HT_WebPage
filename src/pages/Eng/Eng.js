import React, {useState} from 'react';
import InfoSection from '../../components/EnglishComps/InfoSection/InfoSection';
import Services from '../../components/EnglishComps/services/Services';
import SideBar from '../../components/EnglishComps/sideBar/sideBar';
import Navbar from '../../components/EnglishComps/navbar/NavBar';
import IntroSection from '../../components/EnglishComps/introSection/introSection';
import AboutCofounders from '../../components/EnglishComps/aboutCofounders/aboutCofounders'
import TableSection from '../../components/EnglishComps/tableSection/tableSection';
import AspectSection from '../../components/EnglishComps/aspectSection/AspectSection';
import Contact from '../../components/EnglishComps/contact/contact';
import GraphSection from '../../components/EnglishComps/graphSection/graphSection';
import Footer from '../../components/EnglishComps/footer/Footer';

const Eng = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle= {toggle}/>
        <IntroSection />
        <InfoSection />
        <TableSection />
        <GraphSection />
        <AspectSection />
        <Services />
        <AboutCofounders/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Eng