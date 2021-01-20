import React from 'react';

function Nav() {

    return (
        <div className='sideBar'>
            <Nav className='flex-column'>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Excise</Nav.Link>
                <Nav.Link>Calculator</Nav.Link>
                <Nav.Link>Calendar</Nav.Link>
            </Nav>
        </div>
    )
}

export default Nav;