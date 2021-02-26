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
import {SelectBox, Option} from './SelectBox';
import { ImSearch } from 'react-icons/im';
import { Query } from 'react-apollo';
import axios from 'axios';

var token = Cookies.get("token");
var SelectAlertOption1 = Cookies.get('locale') === 'en' ? 'All' : 'Todo';
var SelectAlertOption2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';
var SelectAlertOption3 = Cookies.get('locale') === 'en' ? 'Doubt' : 'Dudoso';
var SelectAlertOption4 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';
var SelectAlertOptionDestination = Cookies.get('locale') === 'en' ? 'Arrival' : 'Destino';
var SelectAlertOptionOrigin = Cookies.get('locale') === 'en' ? 'Departure' : 'Origen';
var SelectAlertOptionSender = Cookies.get('locale') === 'en' ? 'Sender' : 'Remitente';
var SelectAlertOptionReceiver = Cookies.get('locale') === 'en' ? 'Receiver' : 'Destinatario';


function ReportsTable(){
    const [dataFiltered,setData] = useState();
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
    if (errorBranches) return `Error! ${errorShipments.message}`;
    if (loadingUsernames) return 'Loading...';
    if (errorUsernames) return `Error! ${errorShipments.message}`;
    var myData = resShipments;
    const handleChangeStatus = e => {
        filter.statusValue =  e.target.value
        console.log(filter.statusValue);
      };
      const handleChangeOrigin = e => {
        filter.originValue = e.target.value
        console.log(filter.originValue);
      };
      const handleChangeDestination = e => {
        filter.destinationValue = e.target.value
        console.log(filter.destinationValue);
      };
      const handleChangeSender = e => {
        filter.senderValue = e.target.value
        console.log(filter.senderValue);
      };
      const handleChangeReceiver = e => {
        filter.receiverValue = e.target.value
        console.log(filter.receiverValue);
      };
    const handleSubmit = async () => {
        try {
             await axios({
                "method": "GET",
                "url": "https://api.h-trace.com:3000/graphql",
                "headers": {
                    authorization : `Bearer ${token}`
                },
                "data": {
                    "query": `query (
                        $origin_user_id:Int!,
                        $origin_id:String!,
                        $destination_user_id:Int!,
                        $destination_id:String,
                        $status:String
                        ){
                        shipments(
                          origin_user_id: $origin_user_id,
                          origin_id: $origin_id,
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
                      }
                    `,
                    "variables": {              
                "origin_user_id" : filter.senderValue,
                "origin_id": filter.originValue,
                "destination_user_id": filter.receiverValue,
                "destination_id": filter.destinationValue,
                "status": filter.statusValue
                    }
                }
            })
            .then((response) => {
                setData(response.data)
                console.log(dataFiltered)
            })
        } catch (e) {
            console.log(e);
        }





       /*  <Query query={GET_MONTHLY_SHIPMENTS_FILTER} variables={{
            origin_user_id: filter.senderValue,
            origin_id: filter.originValue,
            destination_user_id: filter.receiverValue,
            destination_id: filter.destinationValue,
            status: filter.statusValue
        }} >
            {({data, loading }) => {
            if(loading) return 'loading...'
            setData(data)
            }}
        </Query>
        console.log(dataFiltered) */


        /* fetch('https://api.h-trace.com:3000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            authorization : `Bearer ${token}` },
        body: JSON.stringify(GET_MONTHLY_SHIPMENTS_FILTER,{
            origin_user_id: filter.senderValue,
            origin_id: filter.originValue,
            destination_user_id: filter.receiverValue,
            destination_id: filter.destinationValue,
            status: filter.statusValue
        }),
        })
        .then(res => console.log(res.data)); */
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
                    <StyledButtonSearch onClick={handleSubmit}><ImSearch/></StyledButtonSearch>
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
