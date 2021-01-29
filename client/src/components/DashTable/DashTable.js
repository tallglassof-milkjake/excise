import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
// import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';
import DashData from '../DashData/DashData';
import Search from '../Search/Search';
import './DashTable.css';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const DashTable = ({ headings, handleSort }) => {

    const [excise, setExcise] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(6);

    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExcise();
            setExcise(res.data);
            console.log(res.data);
        }

        fetch();
    }, []);

    console.log(excise);

    // Get current post

    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentExcise = excise.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            
        <hr/>
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
                <DashData excise={currentExcise}/>
            </table>
            <Pagination itemPerPage={itemPerPage} totalExcise={excise.length} paginate={paginate} />
        </>
    )
}

export default DashTable;