import React from 'react';
import GraphUserSection from '../../components/userPage/graphUserSection/GraphUserSection';
import SidebarMenu from '../../components/userPage/sidebarMenu/SidebarMenu';
import StadisticsHeader from '../../components/userPage/stadisticsHeader/StadisticsHeader';

const UserPage = () => {
    return (
        <>
            <SidebarMenu />
            <StadisticsHeader />
            <GraphUserSection />
        </>
    )
}

export default UserPage
