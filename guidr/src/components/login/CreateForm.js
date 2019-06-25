import React from 'react';

class CreateForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
        return (
            <div>
                <form>
                    <h4>First Name</h4>
                    <input 
                      placeholder=''
                      type='text'
                      name='firstName'
                      value={this.state.firstName}
                      onChange={this.changeHandler}
                    />
                    <h4>Last Name</h4>
                    <input 
                      placeholder=''
                      type='text'
                      name='lastName'
                      value={this.state.lastName}
                      onChange={this.changeHandler}
                    />
                    <h4>Email</h4>
                    <input 
                      placeholder=''
                      type='text'
                      name='email'
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                    <h4>Password</h4>
                    <input 
                      placeholder=''
                      type='password'
                      name='password'
                      value={this.state.password}
                      onChange={this.changeHandler}
                    /><br />
                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default CreateForm