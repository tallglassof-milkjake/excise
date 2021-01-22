import React from 'react';
import { Nav } from 'react-bootstrap';
import './Nav.css';

function NavBar() {

    return (
        <div className='sidebar-item'>
            <div className='make-me-sticky'>
                <Nav.Item>
                    <Nav.Link className='sidebar-menu-item' href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='sidebar-menu-item' eventKey="link-1" href='/excise'>Excise</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='sidebar-menu-item' eventKey="link-2">Calculator</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='sidebar-menu-item' eventKey="link-3">Calendar</Nav.Link>
                </Nav.Item>
            </div>
        </div>
        // <>
        //     <Nav 
        //         className="col-md-12 d-none d-md-block bg-light sidebar"
        //         activeKey="/home"
        //         onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        //     >
        //         <div className="sidebar-sticky"></div>
        //         
        //     </Nav>
        // </>
    )
}

export default NavBar;