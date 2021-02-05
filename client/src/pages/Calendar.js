import React, { useState, } from 'react';
import Calendar from 'react-calendar';
import SideBar from '../components/SideBar/Nav';
import CalendarCard from '../components/CalendarCard/CalendarCard';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    const headings = [
        { name: 'Time', width: '10%' },
        { name: 'Schedule', width: '90%' },
    ]

    const times = [
        { time: '06:00', key: 1 },
        { time: '07:00', key: 2 },
        { time: '08:00', key: 3 },
        { time: '09:00', key: 4 },
        { time: '10:00', key: 5 },
        { time: '11:00', key: 6 },
        { time: '12:00', key: 7 },
        { time: '13:00', key: 8 },
        { time: '14:00', key: 9 },
        { time: '15:00', key: 10 },
        { time: '16:00', key: 12 },
        { time: '17:00', key: 13 },
        { time: '18:00', key: 14 },
        { time: '19:00', key: 15 },
        { time: '20:00', key: 16 },
    ]

    return (
        <>
            <div className='col-2 side-bar-col'>
                    <SideBar />
            </div>
            <div className='main-col'>
                <div className='calendar-row row '>
                    <div className='calendar-col col mx-auto'>
                        <Calendar 
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CalendarCard 
                            headings={headings}
                            times={times}
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MyCalendar;