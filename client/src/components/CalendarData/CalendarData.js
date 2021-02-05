import React from 'react';

const CalendarData = ({ times }) => {

    console.log(times)

    const getEachTimeSlot = () => {
        for (let i = 0; i < times.length; i++) {
            console.log(times)
            return (
                <td className='col'>
                    {times[i]}
                </td>
            )
        }
    } 

    getEachTimeSlot();

    return (
        <tbody>
            <tr>
                {times.forEach((time) => {
                    return (
                        <td key={times.key}>
                            {times.time}
                        </td>
                    )
                })}
            </tr>
        </tbody>
    )
};

export default CalendarData;