import React from 'react'
import { GET_USERNAMES } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";

function GetUsernames(usernameID){
    const { loading, error, data } = useQuery(GET_USERNAMES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var userTag = data.users.filter(obj => {
        return obj.user_id === usernameID
      });
    return (
        <p>{userTag[0].username}</p>
    )
}

export default GetUsernames
