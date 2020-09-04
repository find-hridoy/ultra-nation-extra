import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);
    return (
        <div className="home-area py-3 bg-secondary text-light">
            <Container>
                <h4 className="py-3">Total Country : {country.length}</h4>
                <Row>
                    {
                        country.map((country) =>
                            <Col md={3} className="p-1">
                                <Country country={country} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;