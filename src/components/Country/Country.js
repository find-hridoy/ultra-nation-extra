import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name } = props.country;
    return (
        <div>
            <Link to={`/country/${name}`}>
                <ListGroup>
                    <ListGroup.Item action className="text-primary font-weight-bold" variant="secondary">
                        {name}
                    </ListGroup.Item>
                </ListGroup>
            </Link >
        </div >
    );
};

export default Country;