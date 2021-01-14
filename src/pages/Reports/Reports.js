import React from 'react';
import ReportsTable from '../../components/ReportsUserPage/ReportsTable/ReportsTable';
import SearchHeader from '../../components/ReportsUserPage/SearchHeader/SearchHeader';
import SidebarMenu from '../../components/userPage/sidebarMenu/SidebarMenu';
import { Task } from '../../Task';

const Reports = () => {
    return (
        <>
          <SidebarMenu />
          <SearchHeader />
          <ReportsTable />
          <Task/>
        </>
    )
}

export default Reports
