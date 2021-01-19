import React from 'react'
import { HiDownload } from 'react-icons/hi';
function getReport(shipmentID){
    return (
        <a
            href={'http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/reports/'+ shipmentID}
            download={"report_id" + shipmentID}  
            target="_blank"
            rel="report"
        ><HiDownload  size={20}/></a>
    )
}

export default getReport
