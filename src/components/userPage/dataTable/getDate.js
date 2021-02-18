import React from 'react';
import Cookies from 'js-cookie';

function getDate(dateTag){
    let locale = Cookies.get('locale');
    var dataStamp = new Date(dateTag)
    let dataFormatSpanish = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit'
    }).format(dataStamp)
    let dataFormatEnglish = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit'
    }).format(dataStamp)

    return (
        Cookies.get('locale') === 'en' ? <p>{dataFormatEnglish}</p> : <p>{dataFormatSpanish}</p>
    )
}

export default getDate
