import React, { Component } from 'react';
import TimeSlot from './TimeSlot';

class TimeSlots extends Component {

    state = {
        availableTimes: [
            {id: 0, timeSlot: 9, available: true},
            {id: 1, timeSlot: 10, available: true},
            {id: 2, timeSlot: 11, available: true},
            {id: 3, timeSlot: 12, available: true},
            {id: 4, timeSlot: 13, available: true},
            {id: 5, timeSlot: 14, available: true},
            {id: 6, timeSlot: 15, available: true},
            {id: 7, timeSlot: 16, available: true},
        ]
    }

    bookAppointment = (time) => {
        this.props.bookSlot(time);
    }

    render() {

        return (
            <div className = 'container'>
                <h4>Available Slots</h4>
                <div className = 'row'>
                {this.state.availableTimes.map( (timeSlot) => {
                    return <TimeSlot key = {timeSlot.timeSlot} timeSlot = {timeSlot} bookAppointment = {this.bookAppointment}/>
                })}
                </div>
            </div>
        )
    }
}

export default TimeSlots;