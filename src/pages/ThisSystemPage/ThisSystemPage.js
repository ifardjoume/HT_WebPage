import React,{useState} from 'react'
import Navbar from '../../components/navBarDefault/NavBar'
import GraphSection from '../../components/graphSection/graphSection';
import THISInfoSection from '../../components/ThisSystemPage/THISInfoSection/THISInfoSection';
import THISProcessSection from '../../components/ThisSystemPage/THISInfoSection/THISProccessSection/THISProcessSection';
import Footer from '../../components/footer/Footer'
import SideBar from '../../components/sideBarDefault/sideBar';

const ThisSystemPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle= {toggle}/>
            <THISInfoSection />
            <GraphSection />
            <THISProcessSection />
            <Footer />
        </div>
    )
}

export default ThisSystemPage
