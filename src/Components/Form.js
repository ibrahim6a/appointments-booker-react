import React, { Component } from 'react';
const M = window.M;


class Form extends Component {
    
    state = {
        date: ''
    }

    selectedDate = '';

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.datepicker');
            let instances = M.Datepicker.init(elems, { disableWeekends: true });
            let instance = instances[0];
            instance.options.onSelect = () => {
              this.selectedDate = instance.date;
              console.log(this.selectedDate);
            }
          });
    }

    fetchAvailableTimes() {
        // fetch(`https://appointment-app-server.herokuapp.com/date/${this.selectedDate}`)
        console.log(this.selectedDate);
        fetch(`http://localhost:3000/date/${this.selectedDate}`)
         .then( (response) => {
             return response.json()
         })
          .then( (result) => {
              console.log(result);
          })
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.fetchAvailableTimes();
        this.props.handleSubmit();
    }

    render() {
        return (
            <div className = 'container'>
                <form onSubmit = {this.formSubmit}>
                    <div className = 'input-field'>
                        <label>Full Name:</label>
                        <input className = '' type = 'text'></input>
                    </div>

                    <div className = 'input-field'>
                        <label>Email: </label>
                        <input className = '' type = 'text'></input>
                    </div>

                    <div className = 'input-field'>
                        <label>Select Date:</label>
                        <input type = 'text' className = 'datepicker'></input>
                    </div>

                    <input type = 'submit' value = 'Submit' className = 'btn' ></input>

                </form>
            </div>
        )
    }
}

export default Form;