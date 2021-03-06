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
var receivedStatus = [];
var receivedOrigin = [];
var receivedDestination = [];
var receivedSender = [];
var receivedReceiver = [];
var shipmentsFiltered
function ReportsTable(){
    const [state,setState] = useState();
      var filter = {
        statusValue:null,
        originValue:null,
        destinationValue:null,
        receiverValue:null,
        senderValue:null
      }
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
    console.log("myData",myData)
    function handleSubmit(){
        if(filter.statusValue !== null){
            receivedStatus = dataShipments.filter(obj => {
                return obj.status === filter.statusValue
            });
        }
        if(filter.originValue !== null){
            receivedOrigin = dataShipments.filter(obj => {
                return obj.origin_id === filter.originValue
            });
        }
        if(filter.destinationValue !== null){
            receivedDestination = dataShipments.filter(obj => {
                return obj.destination_id === filter.destinationValue
            });
        }
        if(filter.senderValue !== null){
            receivedSender = dataShipments.filter(obj => {
                return obj.origin_user_id == filter.senderValue
            });
        }
        if(filter.receiverValue !== null){
            receivedReceiver = dataShipments.filter(obj => {
                return obj.destination_user_id == filter.receiverValue
            });
        }
        shipmentsFiltered = [...receivedStatus,...receivedOrigin,...receivedDestination,...receivedSender,...receivedReceiver]
        var uniqueSet = new Set(shipmentsFiltered)
        var noRepeatShipments = {shipments:[...uniqueSet]}
        console.log(noRepeatShipments);
        myData.splice(0,(myData.length))
        console.log(myData)
        myData.push(...noRepeatShipments.shipments)
        console.log(myData)
        myData = dataShipments
        setState(noRepeatShipments);
        //return noRepeatShipments;

    }
    const handleChangeStatus = e => {
        filter.statusValue =  e.target.value
      };
      const handleChangeOrigin = e => {
        filter.originValue = e.target.value
      };
      const handleChangeDestination = e => {
        filter.destinationValue = e.target.value
      };
      const handleChangeSender = e => {
        filter.senderValue = e.target.value
      };
      const handleChangeReceiver = e => {
        filter.receiverValue = e.target.value
      };

    return (
        <>
            <SearchContainer>
                <SearchDiv>
                <SelectBox onChange={handleChangeOrigin}>
                <option value={null}>{SelectAlertOptionOrigin}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeDestination}>
                <option value={null}>{SelectAlertOptionDestination}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeSender}>
                        <option value={null}>{SelectAlertOptionSender}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeReceiver}>
                        <option value={null}>{SelectAlertOptionReceiver}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                    <SelectBox onChange={handleChangeStatus}>
                        <Option value={null} description={SelectAlertOption1} />
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
