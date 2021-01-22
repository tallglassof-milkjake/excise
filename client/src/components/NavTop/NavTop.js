import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function TopNav() {
    return (
        <Navbar expand="lg" className='nav-top' style={{paddingRight: 25, paddingLeft: 25}}>
            <Navbar.Brand style={{color: 'white'}} href="#home">Excise-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Form inline>
                    <Button style={{marginright: '10rem', color: 'white', backgroundColor: '#F0824E', outlineColor: '246CA3'}} id='logout-btn'>Logout</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;