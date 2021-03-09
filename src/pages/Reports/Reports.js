import React from 'react';
import ReportsTableWithQuerys from '../../components/ReportsUserPage/ReportsTable/ReportsTableWithQuerys';
//import SearchHeader from '../../components/ReportsUserPage/SearchHeader/SearchHeader';
import SidebarMenu from '../../components/userPage/sidebarMenu/SidebarMenu';
//import { Task } from '../../Task';

const Reports = () => {
    return (
        <>
          <SidebarMenu />
          <ReportsTableWithQuerys />
        </>
    )
}

export default Reports
