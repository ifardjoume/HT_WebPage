import React from 'react'
import { GET_BRANCHES } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";

function GetBranchName(branchID){
    const { loading, error, data } = useQuery(GET_BRANCHES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var branchName = data.company.branches.filter(obj => {
        return obj.branch_id === branchID
      });
    return (
        <p>{branchName[0].name}</p>
    )
}

export default GetBranchName
