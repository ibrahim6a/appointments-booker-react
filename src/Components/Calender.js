import React, { Component } from 'react';
import Day from './Day';

class Calender extends Component {

    state = {
        numberOfDays: [
            {day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10}, {day: 11}, {day: 12},
            {day: 13}, {day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24},
        ]
    }
    
    render() {
        return (
            <div className = 'container'>
                <h3 className = 'm-5'>Calender</h3>
                <div className = 'row'>
                        {this.state.numberOfDays.map( (dayComponent) => {
                            return  <Day key = {dayComponent.day} dayNumber = {dayComponent.day}/>
                        })}
                </div>
            </div>
        )
    }
}


export default Calender;