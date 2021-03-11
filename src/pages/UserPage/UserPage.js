import React,{useState,useEffect}  from 'react';
import DataTable from '../../components/userPage/dataTable/DataTable';
import GraphUserSection from '../../components/userPage/graphUserSection/GraphUserSection';
import SidebarMenu from '../../components/userPage/sidebarMenu/SidebarMenu';
import StadisticsHeader from '../../components/userPage/stadisticsHeader/StadisticsHeader';
import LoadingScreen from '../../components/loadingPage/LoadingPage';
import Cookies from 'js-cookie';

function setCookies(){
    Cookies.set('locale', "en");
    return "en"
  }

const UserPage = () => {
    Cookies.set('locale',Cookies.get('locale') ? Cookies.get('locale') : setCookies());
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 100)
      }, [])
    return (
        <>
    {loading === false ? (
        <>
            <SidebarMenu />
            <StadisticsHeader />
            <GraphUserSection />
            <DataTable />
        </>) : (<LoadingScreen />)}
        </>
    )
}

export default UserPage
