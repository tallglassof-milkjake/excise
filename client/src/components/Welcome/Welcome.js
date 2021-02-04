import React, { Component, useState, useEffect } from 'react';
import API from '../../utils/API';
import CurrentProducts from '../CurrentProducts/CurrentProducts';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import CalculatorDash from '../CalculatorDash/CalculatorDash';
import './Welcome.css';

const Welcome = () => {
    
    const [excise, setExcise] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await API.getExcise();
            setExcise(result.data);
        }

        fetch();
    }, []);

    const headings = [
        { name: 'Product', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
    ]

        return (
            <div className='welcome-main'>
                <WelcomeMessage />

                <div className='row welcome-table-row'>
                    <div className='col welcome-table-col d-flex align-items-stretch'>
                        <div className='card-group welcome-cards'>
                            <CurrentProducts headings={headings} excise={excise}/>
                            <CalculatorDash />
                        </div>
                        
                    </div>
                </div>
                
    
            </div>
        )
    
};

export default Welcome;