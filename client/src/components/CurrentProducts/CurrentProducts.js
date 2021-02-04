import React, { useEffect, useState } from 'react';
import './CurrentProducts.css';
import WelcomeData from '../WelcomeData/WelcomeData';
import API from '../../utils/API';
import Pagination from '../Pagination/Pagination';
import './CurrentProducts.css';

const CurrentProducts = ({ headings, excise }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(3);

    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentExcise = excise.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    console.log(excise);

    return (
        <>
        <div className='card current-products'>
            <div className='card-body'>
                <div className='row card-head'>
                    <div className='col'>
                        <h3 className='card-title recent-entries-text text-left'>
                            <i className="fas fa-book-open fa-2x"></i>
                            Recent Entries
                        </h3> 
                    </div>
                </div>
                
                <table className='product-table table table-striped'>
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
                    <WelcomeData excise={excise} currentExcise={currentExcise}/>
                </table>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <Pagination 
                            className='product-pagination' 
                            itemPerPage={itemPerPage} 
                            totalExcise={excise.length} 
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CurrentProducts;