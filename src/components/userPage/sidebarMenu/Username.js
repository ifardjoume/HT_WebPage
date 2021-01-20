import React from 'react';
import { GET_USERNAME } from '../../../Query';
import { UsernameHeader } from './SidebarMenu.elements';
import { useQuery } from "@apollo/react-hooks";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';


function Username(){
    var token = Cookies.get('token');
    var decoded = jwt_decode(token);
    const { loading, error, data } = useQuery(GET_USERNAME,{
        variables:{ user_id: decoded.user_id}
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <UsernameHeader>
            {data.user.username}
        </UsernameHeader>
    )
}

export default Username
