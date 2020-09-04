import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = () => {
    const btnHandler = () => {
        alert("Try Again Later");
    }
    return (
        <div className="navbar-area">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="font-weight-bold" href="/home">InfoBD</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Country</Nav.Link>
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Button onClick={btnHandler} variant="outline-warning ml-4 rounded-pill">Login</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;