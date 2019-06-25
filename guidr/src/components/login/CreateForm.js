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

    signUp = e => {
      e.preventDefault();
      this.props.history.push('/create-profile')
    }

    render() {
        return (
            <div>
                <form>
                    <h4>First Name</h4>
                    <input 
                      type='text'
                      name='firstName'
                      value={this.state.firstName}
                      onChange={this.changeHandler}
                    />
                    <h4>Last Name</h4>
                    <input 
                      type='text'
                      name='lastName'
                      value={this.state.lastName}
                      onChange={this.changeHandler}
                    />
                    <h4>Email</h4>
                    <input 
                      type='text'
                      name='email'
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                    <h4>Password</h4>
                    <input 
                      type='password'
                      name='password'
                      value={this.state.password}
                      onChange={this.changeHandler}
                    /><br />
                    <button onClick={this.signUp}>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default CreateForm