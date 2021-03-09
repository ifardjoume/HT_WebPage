import React,{useState} from 'react';
import { GET_SHIPMENTS,
    GET_USERNAMES,
    GET_BRANCHES
} from '../../../Query';
import Cookies from 'js-cookie';
import { ImSearch } from 'react-icons/im';
import { useQuery } from "@apollo/react-hooks";
import { 
    TableContainer,
    StyledButtonSearch
} from './ReportsTable.elements';
import { 
    SearchContainer,
    SearchDiv
} from '../SearchHeader/SearchHeader.elements';
import ReportDataTable from './ReportDataTable';
import {SelectBox, Option} from './SelectBox';
import axios from 'axios';
import { SingleDatePickerInput } from 'react-dates';




//const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjowLCJleHBpcmVzIjoiMjAyMS0wMy0wOVQxOTo0OTo0Ny4wODdaIiwicmVmcmVzaFRva2VuIjpmYWxzZSwiY2xpZW50QWRtaW4iOnRydWUsImlhdCI6MTYxNTIzMjk4N30.wqKw7AlG3AOI9aMr1_cAX74klsd1cf8RJgtZ6DlG-B4"
const token = "Bearer " + Cookies.get('token');
axios.defaults.headers.common['Authorization'] = token;
var SelectAlertOption1 = Cookies.get('locale') === 'en' ? 'All' : 'Todo';
var SelectAlertOption2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';
var SelectAlertOption3 = Cookies.get('locale') === 'en' ? 'Doubt' : 'Dudoso';
var SelectAlertOption4 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';
var SelectAlertOptionDestination = Cookies.get('locale') === 'en' ? 'Arrival' : 'Destino';
var SelectAlertOptionOrigin = Cookies.get('locale') === 'en' ? 'Departure' : 'Origen';
var SelectAlertOptionSender = Cookies.get('locale') === 'en' ? 'Sender' : 'Remitente';
var SelectAlertOptionReceiver = Cookies.get('locale') === 'en' ? 'Receiver' : 'Destinatario';

var myData;
var dataShipments;
/* var receivedStatus = [];
var receivedOrigin = [];
var receivedDestination = [];
var receivedSender = [];
var receivedReceiver = [];
var shipmentsFiltered */
var nonValue = null

var filter = {
    statusValue:null,
    originValue:null,
    destinationValue:null,
    receiverValue:null,
    senderValue:null
  }
function ReportsTable(){
    const [state,setState] = useState();
    const { loading:loadingBranches, error:errorBranches, data:resBranches } = useQuery(GET_BRANCHES);
    const { loading:loadingUsernames, error:errorUsernames, data:resUsernames } = useQuery(GET_USERNAMES);
    const { loading:loadingShipments, error:errorShipments, data:resShipments} = useQuery(GET_SHIPMENTS);
    if (loadingShipments) return 'Loading...';
    if (errorShipments) return `Error! ${errorShipments.message}`;
    if (loadingBranches) return 'Loading...';
    if (errorBranches) return `Error! ${errorBranches.message}`;
    if (loadingUsernames) return 'Loading...';
    if (errorUsernames) return `Error! ${errorUsernames.message}`;
    dataShipments = resShipments.shipments
    myData = dataShipments
    //myData = resShipments.shipments.slice(0,(resShipments.shipments.length))
    //console.log("myData",myData)
    async function handleSubmit(){
        try {
            await axios.post('https://api.h-trace.com/graphql',{
                query: `query(
                    $origin_user_id:Int,
                    $origin_id:String,
                    $destination_user_id:Int,
                    $destination_id:String,
                    $status:String ){
                   shipments(
                     origin_user_id: $origin_user_id,
                     origin_id: $origin_id ,
                     destination_user_id: $destination_user_id,
                     destination_id: $destination_id,
                     status: $status
                     ){
                     shipment_id
                       origin_id
                       origin_user_id
                       destination_user_id
                       destination_id
                       departure
                       arrival
                       status
                   }
                 }`
                ,
               variables: {
                   origin_user_id: filter.senderValue,
                   origin_id: `${filter.originValue}`,
                   destination_user_id: filter.receiverValue, 
                   destination_id: `${filter.destinationValue}`,
                   status :  `${filter.statusValue}`
                 },
                
            })
            .then((response) => {
                var dataResponsed = response.data.data.shipments;
                myData.splice(0,(myData.length))
                myData.push(...dataResponsed)
                console.log("dataFiltered",myData)
                setState(response.data)
                console.log(filter)
            })
        } catch (e) {
            console.log(e);
        }
    }
    const handleChangeStatus = e => {
        filter.statusValue =  e.target.value === "null" ? null : e.target.value
        console.log(filter.statusValue)
      };
      const handleChangeOrigin = e => {
        filter.originValue = e.target.value === "null" ? null : e.target.value
        console.log(filter.originValue)
      };
      const handleChangeDestination = e => {
        filter.destinationValue = e.target.value === "null" ? null : e.target.value
        console.log(filter.destinationValue)
      };
      const handleChangeSender = e => {
        filter.senderValue = e.target.value === "null" ? null : parseInt(e.target.value);
        console.log(filter.senderValue)
      };
      const handleChangeReceiver = e => {
        filter.receiverValue = e.target.value === "null" ? null : parseInt(e.target.value);
        console.log(filter.receiverValue);
      };

    return (
        <>
            <SearchContainer>
                <SearchDiv>
                <SelectBox onChange={handleChangeOrigin}>
                <option value={"null"}>{SelectAlertOptionOrigin}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeDestination}>
                <option value={"null"}>{SelectAlertOptionDestination}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeSender}>
                        <option value={"null"}>{SelectAlertOptionSender}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeReceiver}>
                        <option value={"null"}>{SelectAlertOptionReceiver}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                    <SelectBox onChange={handleChangeStatus}>
                        <Option value={"null"} description={SelectAlertOption1} />
                        <Option value="failed" description={SelectAlertOption2} />
                        <Option value="uncertain" description={SelectAlertOption3} />
                        <Option value="successful" description={SelectAlertOption4} />
                    </SelectBox>
                    <StyledButtonSearch onClick={handleSubmit}><ImSearch/></StyledButtonSearch>
                </SearchDiv>
            </SearchContainer>
            <TableContainer>
                    <ReportDataTable reportDataShipments={myData} /* onRender={() => handleSubmit} */
                    />
            </TableContainer>
    </>
    )
}

export default ReportsTable