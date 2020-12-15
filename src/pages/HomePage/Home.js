import React, {useState} from 'react';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import { InfoSection, Services } from '../../components';
import SideBar from '../../components/sideBar/sideBar';
import Navbar from '../../components/navbar/NavBar';
import IntroSection from '../../components/introSection/introSection';
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
        <InfoSection {...homeObjThree}/>
        <Services />
        </>
    )
}

export default Home
