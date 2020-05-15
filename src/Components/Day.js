import React, { Component } from 'react';

class Day extends Component {

    render() {

        return (
            <div className = 'col s2'>
            <button className = 'waves-effect btn-large' onClick = {(event) => {
                console.log(this.props.dayNumber);
            }}>{this.props.dayNumber}</button>
            </div>
        )
    }
}

export default Day;