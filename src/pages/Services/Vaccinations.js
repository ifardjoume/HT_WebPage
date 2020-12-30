import React from 'react';
import Navbar from '../../components/navbar/NavBarDefault';
import Footer from '../../components/footer/Footer';
import InfoVaccines from '../../components/services/Vaccinations/InfoVaccines/InfoVaccines';
import VaccinesIcons from '../../components/services/Vaccinations/VaccinesIcons/IconVaccines';
import RenderVaccines from '../../components/services/Vaccinations/RenderVaccines/RenderVaccines';

const Vaccinations = () => {

    return (
        <> 
        <Navbar/>
        <InfoVaccines />
        <VaccinesIcons />
        <RenderVaccines />
        <Footer/>
        </>
    )
}

export default Vaccinations