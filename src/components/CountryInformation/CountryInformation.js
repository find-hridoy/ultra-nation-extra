import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './CountryInformation.css';

const CountryInformation = (props) => {
    const { name, capital, region, population, area, flag } = props.details;
    const natives = props.details.languages;
    return (
        <div className="py-5">
            <Container>
                <Row className="align-items-center justify-content-center d-flex">
                    <Col md={6}>
                        <div className="flag-area">
                            <img className="w-100" src={flag} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="details-area">
                            <h3 className="text-success pb-3 font-weight-bold">{name}</h3>
                            <div className="justify-content-between d-flex">
                                <p className="title-text">Capital</p>
                                <p className="info-text">{capital}</p>
                            </div>
                            <div className="justify-content-between d-flex">
                                <p className="title-text">Region</p>
                                <p className="info-text">{region}</p>
                            </div>
                            <div className="justify-content-between d-flex">
                                <p className="title-text">Population</p>
                                <p className="info-text">{population}</p>
                            </div>
                            <div className="justify-content-between d-flex">
                                <p className="title-text">Area</p>
                                <p className="info-text">{area} <small><strong>Square K.M.</strong></small></p>
                            </div>
                            {
                                natives.map((lang) =>
                                    <div className="justify-content-between d-flex">
                                        <p className="title-text">Language</p>
                                        <p className="info-text">{lang.name} / {lang.nativeName}</p>
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                </Row >
            </Container >
        </div>
    );
};

export default CountryInformation;