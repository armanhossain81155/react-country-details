import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    console.log(props.country)
    const {name, capital, region,alpha2Code} = props.country;
    const countryStyle = {
        border: '1px solid gray',
        padding : '20px',
        margin: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name : {name}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Region : {region}</h4>
            <Link to={`details/${alpha2Code}`}><button>Details</button></Link>
        </div>
    );
};

export default Country;