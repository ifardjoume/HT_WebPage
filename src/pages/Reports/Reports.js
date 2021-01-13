import React from 'react';
import DataTable from '../../components/userPage/dataTable/DataTablev2';
import GraphUserSection from '../../components/userPage/graphUserSection/GraphUserSection';
import SidebarMenu from '../../components/userPage/sidebarMenu/SidebarMenu';
import StadisticsHeader from '../../components/userPage/stadisticsHeader/StadisticsHeader';

const Reports = () => {
    return (
        <>
          <SidebarMenu /> 
          <StadisticsHeader />
            <GraphUserSection />
            <DataTable />
        </>
    )
}

export default Reports
