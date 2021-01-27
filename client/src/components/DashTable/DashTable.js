import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';
import DashData from '../DashData/DashData';
import './DashTable.css';

const DashTable = ({ headings }) => {

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
                                >
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <DashData />
            </table>
        </>
    )
}

export default DashTable;