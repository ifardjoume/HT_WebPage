import React,{useState} from 'react';
import { GET_SHIPMENTS,
    GET_MONTHLY_SHIPMENTS_FILTER,
    GET_USERNAMES,
    GET_BRANCHES
} from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import { 
    TableContainer,
    StyledButtonSearch
} from './ReportsTable.elements';
import { 
    SearchContainer,
    SearchDiv
} from '../SearchHeader/SearchHeader.elements';
import Cookies from 'js-cookie';
import ReportDataTable from './ReportDataTable';
import {SelectBox, Option} from './SelectBox'


var SelectAlertOption1 = Cookies.get('locale') === 'en' ? 'All' : 'Todo';
var SelectAlertOption2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';
var SelectAlertOption3 = Cookies.get('locale') === 'en' ? 'Doubt' : 'Dudoso';
var SelectAlertOption4 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';
var SelectAlertOptionDestination = Cookies.get('locale') === 'en' ? 'Arrival' : 'Destino';
var SelectAlertOptionOrigin = Cookies.get('locale') === 'en' ? 'Departure' : 'Origen';
var SelectAlertOptionSender = Cookies.get('locale') === 'en' ? 'Sender' : 'Remitente';
var SelectAlertOptionReceiver = Cookies.get('locale') === 'en' ? 'Receiver' : 'Destinatario';


function ReportsTable(){
    const [state,setState] = useState({
        statusValue:null,
        originValue:null,
        destinationValue:null,
        receiverValue:null,
        senderValue:null
      });
    const { loading:loadingBranches, error:errorBranches, data:resBranches } = useQuery(GET_BRANCHES);
    const { loading:loadingUsernames, error:errorUsernames, data:resUsernames } = useQuery(GET_USERNAMES);
    const { loading:loadingShipments, error:errorShipments, data:resShipments} = useQuery(GET_SHIPMENTS);
    if (loadingShipments) return 'Loading...';
    if (errorShipments) return `Error! ${errorShipments.message}`;
    var myData = resShipments;
    const handleChangeStatus = e => {
        setState({ statusValue: e.target.value });
        console.log(state.statusValue);
      };
      const handleChangeOrigin = e => {
        setState({ originValue: e.target.value });
        console.log(state.originValue);
      };
      const handleChangeDestination = e => {
        setState({ destinationValue: e.target.value });
        console.log(state.destinationValue);
      };
      const handleChangeSender = e => {
        setState({ senderValue: e.target.value });
        console.log(state.senderValue);
      };
      const handleChangeReceiver = e => {
        setState({ receiverValue: e.target.value });
        console.log(state.receiverValue);
      };
    const handleSubmit = () => {
        /* const { loading, error, data} = useQuery(GET_MONTHLY_SHIPMENTS_FILTER,{
        origin_user_id: null,
        origin_id: null,
        destination_user_id: null,
        destination_id: null,
        status: selectedOption.target.value
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var dataFilter = data
    console.log(data) */
    }

    return (
        <>
            <SearchContainer>
                <SearchDiv>
                <SelectBox onChange={handleChangeOrigin}>
                <option value="">{SelectAlertOptionOrigin}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeDestination}>
                <option value="">{SelectAlertOptionDestination}</option>
                        {resBranches.company.branches.map(function(branch){
                    return <Option
                    key={branch.branch_id}
                    value={branch.branch_id}
                    description={branch.name}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeSender}>
                        <option value="">{SelectAlertOptionSender}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                <SelectBox onChange={handleChangeReceiver}>
                        <option value="">{SelectAlertOptionReceiver}</option>
                    {resUsernames.users.map(function(userTag){
                    return <Option 
                    key={userTag.username}
                    value={userTag.user_id}
                    description={userTag.username}
                    />
                    })}
                </SelectBox>
                    <SelectBox onChange={handleChangeStatus}>
                        <Option value="" description={SelectAlertOption1} />
                        <Option value="failed" description={SelectAlertOption2} />
                        <Option value="uncertain" description={SelectAlertOption3} />
                        <Option value="successful" description={SelectAlertOption4} />
                    </SelectBox>
                    <StyledButtonSearch onClick={handleSubmit()}>Search</StyledButtonSearch>
                </SearchDiv>
            </SearchContainer>
            <TableContainer>
                    <ReportDataTable reportDataShipments={myData}
                    />
            </TableContainer>
    </>
    )
}

export default ReportsTable
