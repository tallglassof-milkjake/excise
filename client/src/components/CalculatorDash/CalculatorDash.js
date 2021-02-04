import React from 'react';
import './CalculatorDash.css';

const CalculatorDash = () => {

    return (
        <div className='card calc-card'>
            <div className='card-body'>
                <div className='row card-head'>
                    <div className='col'>
                        <h3 className='card-title calculator-head text-left'>
                            <i className="fas fa-calculator fa-2x"></i>
                            Calculators
                        </h3>
                    </div>
                </div>
                
                <p className='card-text text-left calc-text'>
                I'm baby glossier brooklyn squid, celiac fam unicorn 
                butcher readymade cardigan ad letterpress health goth 
                qui. +1 3 wolf moon vice, plaid pitchfork franzen 
                succulents hexagon exercitation YOLO pickled id drinking 
                vinegar biodiesel. Fanny pack elit sint man bun esse 
                eiusmod vape selvage. Hot chicken aesthetic typewriter 
                crucifix brooklyn.
                </p>

                <button className='btn btn-block calc-btn'>Calculate</button>
            </div>
        </div>
    )
}

export default CalculatorDash;