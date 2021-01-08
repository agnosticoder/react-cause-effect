import React, {useState} from 'react';

const Person = ({street, city, state, country, telephone, birthday}) => {

    
    return (
        <div>
            <div> 
                <div>Street: {street}</div>
                <div>City: {city}</div>
                <div>State: {state}</div>
                <div>Country: {country}</div>
                <div>Telephone: {telephone}</div>
                <div>Birthday: {birthday}</div>
            </div>
        </div>
    )
}

export default Person;