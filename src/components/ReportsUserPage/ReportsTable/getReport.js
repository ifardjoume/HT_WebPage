import React from 'react'
import { HiDownload } from 'react-icons/hi';
import Cookies from 'js-cookie';

function getReport(shipmentID){
    const token = Cookies.get('token')
    function sendHeader(){

    }
    return (
        
        <a
            href={'http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/reports/'+ shipmentID}
            download={"report_id" + shipmentID}
            onClick = {() => sendHeader()}  
            target="_blank"
            rel="noreferrer"
        >
            <HiDownload  size={20}/>
        </a>
    )
}

export default getReport
