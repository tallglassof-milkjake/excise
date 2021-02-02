import React from 'react';
import ViewData from '../ViewData/ViewData';

const ViewTable = ({ headings, props }) => {    

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
                    id={props}
                />
            </table>
        </>
    )
}

export default ViewTable;