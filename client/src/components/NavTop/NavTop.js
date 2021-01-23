import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import AuthNav from '../AuthNav/AuthNav';

function TopNav() {
    return (
        <Navbar expand="lg" className='nav-top' style={{paddingRight: 25, paddingLeft: 25}}>
            <Navbar.Brand style={{color: 'white'}} href="#home">Excise-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Form inline>
                    <AuthNav />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;