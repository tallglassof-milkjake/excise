import React, { useEffect, useState } from 'react';
import DashData from '../DashData/DashData';
import './DashTable.css';
import Pagination from '../Pagination/Pagination';
import API from '../../utils/API';

const DashTable = ({ headings, handleSort, excise}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(6);

    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentExcise = excise.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    console.log(currentExcise);

    return (
        <>
        <div className='card dash-card'>
            <table className='table table-striped dashboard-table'>
                <thead>
                    <tr>
                        {headings.map(({ name, width}) => {
                            return (
                                <th
                                    className='col'
                                    key={name}
                                    style={{width}}
                                    onClick={() => {
                                        handleSort(name.toLowerCase())
                                    }}
                                >
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <DashData
                    currentExcise={currentExcise}
                    excise={excise}
                />
            </table>
            <Pagination itemPerPage={itemPerPage} totalExcise={excise.length} paginate={paginate} />
        </div>
        </>
    )
}

export default DashTable;