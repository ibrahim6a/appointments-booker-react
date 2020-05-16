import React, { Component } from 'react';
const M = window.M;


class Form extends Component {
    
    state = {
        date: '',
        user: {
            fullName: 'John Doe',
            email: 'jd@gmail.com'
        }
    }
   
    componentDidMount() {
            console.log(process.env);
            let elems = document.querySelectorAll('.datepicker');
            let instances = M.Datepicker.init(elems, { disableWeekends: true, format: 'dd, mm, yyyy' });
            let instance = instances[0];
            instance.options.onSelect = () => {
                this.setState({ date: instance.date })
            }
    }

 
    fetchAvailableTimes() {
        // fetch(`https://appointment-app-server.herokuapp.com/date/${this.state.date}`)
        fetch(`http://localhost:3000/date/${this.selectedDate}`)
         .then( (response) => {
             return response.json()
         })
          .then( (result) => {
              console.log(result);
          })
           .catch( (error) => {
               console.log(error);
           })
    }   

    updateUser = (event) => {
        const { user } = { ...this.state };
        const currentState = user;
        const { name, value } = event.target;
        currentState[name] = value;
        this.setState({ user: currentState });
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.fetchAvailableTimes();
        this.setState({ date: this.selectedDate});
        this.props.handleSubmit(this.state.user, this.state.date);
    }

    render() {
        return (
            <div className = 'container'>
                <form onSubmit = {this.formSubmit}>
                    <div className = 'input-field'>
                        <label>Full Name:</label>
                        <input className = '' type = 'text' name = 'fullName' value = {this.state.user.fullName} onChange = {this.updateUser}></input>
                    </div>

                    <div className = 'input-field'>
                        <label>Email: </label>
                        <input className = '' type = 'text' name = 'email' value = {this.state.user.email} onChange = {this.updateUser}></input>
                    </div>

                    <div className = 'input-field'>
                        <label>Select Date:</label>
                        <input type = 'text' className = 'datepicker'></input>
                    </div>

                    <input type = 'submit' value = 'Check Availability' className = 'btn' ></input>

                </form>
            </div>
        )
    }
}

export default Form;