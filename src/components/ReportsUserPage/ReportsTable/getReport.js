import Cookies from 'js-cookie';
import axios from 'axios';


function getReport(shipmentID){
  const token = "Bearer " + Cookies.get('token');
  axios.defaults.headers.common['Authorization'] = token;
            try {
               axios
                .get('https://api.h-trace.com/reports/'+ shipmentID, {
                  responseType: "blob",
                })
                .then((response) => {
                  //Create a Blob from the PDF Stream
                  const file = new Blob([response.data], { type: "application/pdf" });
                  //Build a URL from the file
                  const fileURL = URL.createObjectURL(file);
                  //Open the URL on new Window
                   const pdfWindow = window.open();
                   pdfWindow.location.href = fileURL;            
                })
                .catch((error) => {
                  console.log(error);
                });
            } catch (error) {
              return { error };
            }
}

export default getReport
