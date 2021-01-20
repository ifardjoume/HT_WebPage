import React from 'react'
import { StyledSelect } from './SearchHeader.elements';
import { GET_BRANCHES} from '../../../Query';
import { useQuery } from "@apollo/react-hooks";


function BranchSelect(){
    const { loading, error, data } = useQuery(GET_BRANCHES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <>
        <StyledSelect>
            <option value="">Origen</option>
            {data.company.branches.map(function(branch){
               return <option 
               key={branch.name}
               value={branch.name}
               >
                {branch.name}
            </option>
            })}
        </StyledSelect>
        <StyledSelect>
            <option value="">Destino</option>
            {data.company.branches.map(function(branch){
               return <option 
               key={branch.name}
               value={branch.name}
               >
                {branch.name}
            </option>
            })}
        </StyledSelect>
        
        </>
    )
}

export default BranchSelect