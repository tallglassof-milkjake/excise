import React, { Component } from 'react';
import CurrentProducts from '../CurrentProducts/CurrentProducts';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import './Welcome.css';

class Welcome extends Component {

    headings = [
        { name: 'Date', width: '10%' },
        { name: 'Product', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
    ]

    render() {
        return (
            <div className='welcome-main'>
                <WelcomeMessage />

                <div className='row welcome-table-row'>
                    <div className='col welcome-table-col'>
                        <CurrentProducts headings={this.headings}/>
                    </div>
                </div>
                
    
            </div>
        )
    }
    
};

export default Welcome;