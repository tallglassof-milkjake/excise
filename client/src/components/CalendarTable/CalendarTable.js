import React from 'react';
import CalendarData from '../CalendarData/CalendarData';

const CalendarTable = ({ headings, times }) => {
    return (
        <>
            <table className='table table-striped'>
                <thead className='thead-dark'>
                    <tr>
                        {headings.map(({ name, width }) => {
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
                <CalendarData
                    times={times}
                />
            </table>
            <a href="#" className="btn calendar-btn">Go somewhere</a>
        </>
    )
}

export default CalendarTable;