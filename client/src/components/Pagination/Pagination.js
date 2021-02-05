import React from 'react';

import './Pagination.css';

const Pagination = ({ itemPerPage, totalExcise, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalExcise / itemPerPage); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav className='pagination'>
            <ul className='nav mx-auto'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item text-center'>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number)
                            }} 
                            href='!#' 
                            className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;