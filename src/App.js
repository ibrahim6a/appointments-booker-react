import React, { Component } from 'react';
import Form from './Components/Form';
import TimeSlots from './Components/TimeSlots';


class App extends Component {

  state = {
    dateSelected: false
  }

  showTimeSlots = () => {
    this.setState({ dateSelected: true })
  }

  render() {
    return (
      <div>
       <Form handleSubmit = {this.showTimeSlots} />
      {this.state.dateSelected && <TimeSlots />}
      </div>
    );
  }
}

export default App;
