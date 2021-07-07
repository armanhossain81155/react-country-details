import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    let { alpha2Code } = useParams();
    return (
        <div>
            <h1>This is Country Details : {alpha2Code}</h1>
            <h2>Name  :</h2>
        </div>
    );
};

export default CountryDetails;