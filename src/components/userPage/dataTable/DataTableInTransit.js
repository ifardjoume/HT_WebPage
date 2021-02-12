import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import GetBranchName from '../../ReportsUserPage/ReportsTable/GetBranchName';
import getDate from './getDate';
import Cookies from 'js-cookie';


var MainTitle = Cookies.get('locale') === 'en' ? 'In transit' : 'En tránsito';


function DataTableInTransit(props){
    var filteredList = props.shipmentsInTransit.shipments.filter(obj => {
        return obj.status === "in transit"
    });
    const [newData, setNewData] = useState(filteredList);
    const { subscribeToNewShipments } = props
    const { subscribeToUpdatedShipments } = props
    const { shipmentsInTransit } = props
    useEffect(() => {
        setNewData(filteredList);
    },[ shipmentsInTransit ])
    useEffect(() => {
        subscribeToNewShipments();
        subscribeToUpdatedShipments();
    },[]);
    const columnsInTransit = [
        {
            name: 'ID',
            selector: 'shipment_id',
            sortable: true,
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Departure' : 'Hora de Salida',
            selector: 'departure',
            sortable: true,
            cell: row => getDate(row.departure)
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Origin' : 'Origen',
            selector: 'origin_id',
            sortable: true,
            cell: row => GetBranchName(row.origin_id)
        }
    ];

    return (
        <DataTable
                    responsive
                    columns={columnsInTransit}
                    keyField="shipment_id"
                    data={newData}
                    title={MainTitle}
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
        />
    )
}


export default DataTableInTransit
