import React from 'react';
import './Footer.css';
const Footer = () => {

    

    return (
        <div className='container'>
            <div className='row foot-row'>
                <div className='col foot-col'>
                    <h5><i className="fab fa-etsy fa-lg excise-icon"></i>Excise-Able</h5>
                    <ul className='foot-list text-left mx-auto'>
                        <li className='foot-list-item'><i className="far fa-copyright"></i> Jake Mackinlay</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;