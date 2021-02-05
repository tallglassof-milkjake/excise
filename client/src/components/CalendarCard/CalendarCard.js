import React from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';

const CalendarCard = ({ headings, times }) => {
    return (
        <div className="card mx-auto mt-5" style={{width: '50rem'}}>
            <div className="card-body calendar-card">
                <h5 className="card-title">Day/date placeholder</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <CalendarTable 
                    headings={headings}
                    times={times}
                />
            </div>
        </div>
    )
}

export default CalendarCard;