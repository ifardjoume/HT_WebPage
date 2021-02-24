import React,{useState} from 'react';
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
import Select from 'react-select';


var SelectAlertOption1 = Cookies.get('locale') === 'en' ? 'All' : 'Todo';
var SelectAlertOption2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';
var SelectAlertOption3 = Cookies.get('locale') === 'en' ? 'Doubt' : 'Dudoso';
var SelectAlertOption4 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';

const options = [
    { value: null, label: SelectAlertOption1 },
    { value: 'failed', label: SelectAlertOption2 },
    { value: 'uncertain', label: SelectAlertOption3 },
    { value: 'successful', label: SelectAlertOption4 }
  ];


function ReportsTable(){
    const [state,setState] = useState({
        subscribeToUpdatedShipments: false
      });
      
    const [selectedOption,setSelectedOption] = useState({
        selectedSearch: null
    })
    const { loading, error, data, subscribeToMore } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data
    const handleChange = selectedOption => {
        setSelectedOption({ selectedOption });
        myData.filter(obj => {
            return obj.status === selectedOption.selectedSearch
        });
    };  

    return (
        <>
            <SearchContainer>
                <SearchDiv>
                    <BranchSelectOrigin />
                    <BranchSelectDestination />
                    <UserSelectSender />
                    <UserSelectReceiver />
                    <Select
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        isClearable={true}
                        className="basic-single"
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        name="status"
                    />
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
