import React from 'react'
import { StyledSelect } from './SearchHeader.elements';
import { GET_USERNAMES } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";

const UserSelect = () => {
    const { loading, error, data } = useQuery(GET_USERNAMES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <StyledSelect>
            <option value="">Usuario</option>
            {data.users.map(function(userTag){
               return <option 
               key={userTag.username}
               value={userTag.username}
               >
                   {userTag.username}
                </option>
            })}
        </StyledSelect>
    )
}

export default UserSelect
