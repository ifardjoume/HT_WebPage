import React,{useState,useEffect} from 'react';
import { GET_SHIPMENTS,SHIPMENTS_UPDATED_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import { 
    TableContainer
} from './ReportsTable.elements';
import BranchSelectDestination from '../SearchHeader/BranchSelectDestination';
import BranchSelectOrigin from '../SearchHeader/BranchSelectOrigin';
import { 
    SearchContainer,
    SearchDiv,
    StyledSelect
} from '../SearchHeader/SearchHeader.elements';
import UserSelectReceiver from '../SearchHeader/UserSelectReceiver';
import UserSelectSender from '../SearchHeader/UserSelectSender';
import Cookies from 'js-cookie';
import ReportDataTable from './ReportDataTable';


var SelectAlertOption1 = Cookies.get('locale') === 'en' ? 'All' : 'Todo';
var SelectAlertOption2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';
var SelectAlertOption3 = Cookies.get('locale') === 'en' ? 'Doubt' : 'Dudoso';
var SelectAlertOption4 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';


function ReportsTable(){
    const [state,setState] = useState({
        subscribeToUpdatedShipments: false
      });
    const { loading, error, data, subscribeToMore } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data
    /* var filteredData = received;
    function filterTable(value){
        filteredData = received.filter(obj => {
            return obj.origin_user_id === {value}
        });
    }
    const onChangeFilter = (e) => {
        filterTable(e.value)
    } */


    return (
        <>
            <SearchContainer>
                <SearchDiv>
                    <BranchSelectOrigin />
                    <BranchSelectDestination />
                    <UserSelectSender />
                    <UserSelectReceiver />
                    <StyledSelect
                        className="select"
                        >
                            <option value="">{SelectAlertOption1}</option>
                            <option value="alerta">{SelectAlertOption2}</option>
                            <option value="dudoso">{SelectAlertOption3}</option>
                            <option value="no-alerta">{SelectAlertOption4}</option>
                    </StyledSelect>
                </SearchDiv>
            </SearchContainer>
            <TableContainer>
                    <ReportDataTable reportDataShipments={myData}
                    subscribeToUpdatedShipments={() =>{
                        if(state.subscribeToUpdatedShipments) return null
                        subscribeToMore({
                        document: SHIPMENTS_UPDATED_SUBSCRIPTION,
                        updateQuery: (prev, { subscriptionData }) => {
                            if(!subscriptionData.data){
                                return prev
                            }else{
                            const updatedShipment = subscriptionData.data.shipmentUpdated;
                            const previousShipments = prev.shipments;
                            var shipmentsUpdated = Object.assign({},prev,{
                                shipments:
                                    [...previousShipments, updatedShipment]
                            });
                            return shipmentsUpdated
                            }
                        }
                        })
                        setState({
                            subscribeToUpdatedShipments:true
                        })
                    }
                }
                    />
            </TableContainer>
    </>
    )
}

export default ReportsTable
