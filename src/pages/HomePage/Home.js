import React from 'react';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import { InfoSection, Services } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services />
        </>
    )
}

export default Home
