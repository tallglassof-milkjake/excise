import React from 'react';

import { Nav, Navbar, Form } from 'react-bootstrap';
import AuthNav from '../AuthNav/AuthNav';
import './NavTop.css';

function TopNav() {
    return (
        <Navbar expand="lg" className='nav-top' style={{paddingRight: 25, paddingLeft: 25}}>
            <Navbar.Brand style={{color: 'white'}} className='navhead' href="#home"><span className='excise'><i class="fab fa-etsy fa-lg"></i></span>Excise-Able</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Form inline>
                    {/* <Nav.Item>
                        <Nav.Link href='/welcome'> */}
                            <AuthNav />
                        {/* </Nav.Link>
                    </Nav.Item> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;