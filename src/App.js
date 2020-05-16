import React, { Component } from 'react';
import Form from './Components/Form';
import TimeSlots from './Components/TimeSlots';


class App extends Component {

  state = {
    user: null,
    selectedDate: null,
    selectedTime: null
  }

  showTimeSlots = (user, selectedDate) => {
    this.setState({ user: user, selectedDate: selectedDate })
  }

  bookSlot = (time) => {
    this.setState({ selectedTime: time.timeSlot });

    setTimeout(() => {
      this.sendRequestToServer()
        }, 2000);
    
  }


  sendRequestToServer = () => {
    fetch(`https://appointment-app-server.herokuapp.com/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
     .then( (response) => {
       return response.json()
     })
      .then( (result) => {
        console.log(result)
      })
       .catch( (error) => {
         console.log(error)
       })
  }

  render() {
    return (
      <div>
       <Form handleSubmit = {this.showTimeSlots} />
      {this.state.selectedDate && <TimeSlots bookSlot = {this.bookSlot}/>}
      </div>
    );
  }
}

export default App;
