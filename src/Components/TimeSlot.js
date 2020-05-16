import React from 'react';


function TimeSlot (props) {

    let actionLink;

    if (props.timeSlot.available) {
        actionLink = <button className = 'btn-flat amber-text text-accent-4' onClick = {() => {
            props.bookAppointment(props.timeSlot)
        }}>Book Now</button>;
        
    } else {
        actionLink = <button className = 'btn-flat amber-text text-accent-4 disabled'><s>Unavaliable</s></button>;
    }

    return (
        <div className="col s3">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title">{props.timeSlot.timeSlot}</span>
            </div>
            <div className="card-action">
                {actionLink}
            </div>
        </div>
        </div>

    )
}

export default TimeSlot;