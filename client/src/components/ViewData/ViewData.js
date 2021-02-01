import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

const ViewData = ({ id, data }) => {


    return (
        <tbody>
            <tr>
                <td>
                    <p>{data.description}</p>
                </td>
            </tr>
        </tbody>
        // <tbody>
        //     {exciseData.map(items => {
        //         return (
        //             <tr key={items._id}>
        //                 <td data-th='Date'>
        //                     {items.date}
        //                 </td>
        //             </tr>
        //         )
        //     })}
                
        // </tbody>
        // <tbody>
        //     {myExcise.map(myExcise =>{
        //         return(
        //             <tr
        //                 key={myExcise._id}
        //             >
        //                 <td data-th='Date'>
        //                     {myExcise.date}
        //                 </td>
        //                 <td data-th='Product'>
        //                     {myExcise.product}
        //                 </td>
        //                 <td data-th='Description'>
        //                     {myExcise.description}
        //                 </td>
        //                 <td data-th='Vessel ID'>
        //                     {myExcise.vessel_id}
        //                 </td>
        //                 <td data-th='Volume'>
        //                     {myExcise.volume}
        //                 </td>
        //                 <td data-th='Abv %'>
        //                     {myExcise.abv }
        //                 </td>
        //                 <td data-th='LALs'>
        //                     {myExcise.lals}
        //                 </td>
        //                 <td data-th='Employee'>
        //                     {myExcise.employee}
        //                 </td>
        //                 <td data-th='Notes'>
        //                     {myExcise.notes}
        //                 </td>

        //             </tr>
        //         )
        //     })}
        // </tbody>
    )
}

export default ViewData;