import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuth0, } from "@auth0/auth0-react";
import './Nav.css';

function NavBar() {
    const user = useAuth0();
    const { name, picture } = user;

    return (
            <div className='list-group side-bar-items'>
                <h1>Welcome</h1>
                <h2>{name}</h2>
                <img 
                    src={picture}
                    alt='Profile'
                    className='img-fluid sidebar-img'
                />

                <div>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' href="/welcome">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-1" href="/dashboard">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-2" href='/excise'>Excise</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-3" href='/calculator'>Calculator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-4" href='/calendar'>Calendar</Nav.Link>
                    </Nav.Item>
                </div>
            </div>
    )
}

export default NavBar;