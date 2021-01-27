import React from 'react';
import './CurrentProducts.css';
import WelcomeData from '../WelcomeData/WelcomeData';

const CurrentProducts = ({ headings }) => {
    return (
        <table className='product-table table table-striped table-bordered-dark'>
            <thead>
                <tr>{headings.map(({name, width}) => {
                    return (
                        <th
                            className='col'
                            key={name}
                            style={{width}}
                        >
                            {name}
                        </th>
                    )
                })}</tr>
            </thead>
            <WelcomeData />
        </table>
    )
}

export default CurrentProducts;