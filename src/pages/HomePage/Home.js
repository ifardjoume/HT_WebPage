import React, {useState} from 'react';
import { InfoSection, Services } from '../../components';
import SideBar from '../../components/sideBar/sideBar';
import Navbar from '../../components/navbar/NavBar';
import IntroSection from '../../components/introSection/introSection';
import AboutCofounders from '../../components/aboutCofounders/aboutCofounders'
import TableSection from '../../components/tableSection/tableSection';
import AspectSection from '../../components/aspectSection/AspectSection';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/Footer';
import ThisSection from '../../components/thisSection/ThisSection';

const Home = () => {
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
        <ThisSection />
        <TableSection />
        <AspectSection />
        <Services />
        <AboutCofounders/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home
