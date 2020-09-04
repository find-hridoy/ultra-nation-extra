import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CountryInformation from '../CountryInformation/CountryInformation';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return (
        <div>
            {
                details.map(details => <CountryInformation details={details} />)
            }
        </div>
    );
};

export default CountryDetails;