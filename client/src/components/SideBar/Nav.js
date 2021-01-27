import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuth0, } from "@auth0/auth0-react";
import UserInfo from '../UserInfo/UserInfo';
import './Nav.css';

function NavBar() {
    const user = useAuth0();
    const { name, picture } = user;

    return (
            <div className=' side-bar-items'>
                <div className='user-info'>
                    <UserInfo />
                </div>

                <div className='menu-list'>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' href="/welcome"><span><i className="fas fa-chevron-circle-down"></i></span>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-1" href="/dashboard"><span><i className="fas fa-chevron-circle-down"></i></span>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-2" href='/excise'><span><i className="fas fa-chevron-circle-down"></i></span>Excise</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-3" href='/calculator'><span><i className="fas fa-chevron-circle-down"></i></span>Calculator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-4" href='/calendar'><span><i className="fas fa-chevron-circle-down"></i></span>Calendar</Nav.Link>
                    </Nav.Item>
                </div>
            </div>
    )
}

export default NavBar;