import React from 'react';
import { Nav } from 'react-bootstrap';
import UserInfo from '../UserInfo/UserInfo';
import Footer from '../Footer/Footer';
import './Nav.css';

function NavBar() {

    return (
        <>
            <div className=' side-bar-items'>
                <div className='user-info'>
                    <UserInfo />
                </div>

                <div className='menu-list'>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' href="/welcome"><span><i className="fas fa-house-user menu-icon"></i></span>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-1" href="/dashboard"><span><i className="fas fa-tachometer-alt menu-icon"></i></span>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-2" href='/excise'><span><i className="fas fa-database menu-icon"></i></span>Excise</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-3" href='/calculator'><span><i className="fas fa-calculator menu-icon"></i></span>Calculator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='sidebar-menu-item' eventKey="link-4" href='/calendar'><span><i className="fas fa-calendar-alt menu-icon"></i></span>Calendar</Nav.Link>
                    </Nav.Item>
                </div>
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </>
    )
}

export default NavBar;