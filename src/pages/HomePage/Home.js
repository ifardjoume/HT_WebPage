import React, {useState} from 'react';
import { homeObjOne, homeObjTwo, homeObjFour } from './Data';
import { InfoSection, Services } from '../../components';
import SideBar from '../../components/sideBar/sideBar';
import Navbar from '../../components/navbar/NavBar';
import IntroSection from '../../components/introSection/introSection';
import AboutCofounders from '../../components/aboutCofounders/aboutCofounders'
import GraphSection from '../../components/graphSection/graphSection';
import TableSection from '../../components/tableSection/tableSection';

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
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <TableSection></TableSection>
        <GraphSection />
        <Services />
        <InfoSection {...homeObjFour}/>
        <AboutCofounders />
        </>
    )
}

export default Home
