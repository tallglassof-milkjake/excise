import React, { useState, useEffect } from 'react';
import ViewData from '../ViewData/ViewData';
import API from '../../utils/API';

const ViewTable = ({ headings, excise }) => {

    console.log(excise)

    // console.log(myExcise)

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {headings.map(({name, width}) => {
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
                <ViewData 
                    excise={excise}
                />
            </table>
        </>
    )
}

export default ViewTable;