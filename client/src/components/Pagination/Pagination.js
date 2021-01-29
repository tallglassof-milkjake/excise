import React from 'react';

const Pagination = ({ itemPerPage, totalExcise, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalExcise / itemPerPage); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
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
        </nav>
    )
}

export default Pagination;