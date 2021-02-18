import React,{ useState,useEffect } from 'react'
import { HiDownload } from 'react-icons/hi';
import Cookies from 'js-cookie';

function GetReport(shipmentID){
    var token = Cookies.get("token");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [report, setReport] = useState();
    useEffect(() => {
        fetch('http://ec2-3-15-39-161.us-east-2.compute.amazonaws.com:3000/reports/'+ shipmentID,{
            method:'GET',
            headers:{
                authorization : `Bearer ${token}`
            }
        })
          .then(
            (result) => {
              setIsLoaded(true);
              setReport(result);
              console.log(result);
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <a
            href= {report} 
            target="_blank"
            rel="noreferrer"
        >
            <HiDownload  size={20}/>
        </a>
    )
    }
}

export default GetReport
