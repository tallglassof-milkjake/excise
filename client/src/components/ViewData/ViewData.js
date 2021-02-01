import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

const ViewData = ({ id, data }) => {


    return (
        <tbody>
            <tr>
                <td>
                    {data.date}
                </td>
                <td>
                    {data.product}
                </td>
                <td>
                    {data.description}
                </td>
                <td>
                    {data.vessel_id}
                </td>
                <td>
                    {data.volume}
                </td>
                <td>
                    {data.abv}
                </td>
                <td>
                    {data.lals}
                </td>
                <td>
                    {data.employee}
                </td>
                <td>
                    {data.notes}
                </td>
            </tr>
            
        </tbody>
    )
}

export default ViewData;