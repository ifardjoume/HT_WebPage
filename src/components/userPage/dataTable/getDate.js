import React from 'react'


function getDate(dateTag){

    var dataStamp = new Date(dateTag)
    let dataFormat = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit'
    }).format(dataStamp)

    return (
        <p>{dataFormat}</p>
    )
}

export default getDate
