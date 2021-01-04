import React from 'react';
import Navbar from '../../../components/navbar/NavBarDefault';
import Footer from '../../../components/EnglishComps/footer/Footer';
import InfoVaccines from '../../../components/EnglishComps/services/Vaccinations/InfoVaccines/InfoVaccines';
import VaccinesIcons from '../../../components/EnglishComps/services/Vaccinations/VaccinesIcons/IconVaccines';
import RenderVaccines from '../../../components/EnglishComps/services/Vaccinations/RenderVaccines/RenderVaccines';

const Vaccinations = () => {

    return (
        <> 
        <Navbar/>
        <RenderVaccines />
        <InfoVaccines />
        <VaccinesIcons />
        <Footer/>
        </>
    )
}

export default Vaccinations