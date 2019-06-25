import React from 'react';
import { connect } from 'react-redux';

import { register } from '../../actions'

class RegisterForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    register = e => {
      e.preventDefault();
      this.props.register(this.state)
        .then(res => {
          if (res) {
            this.props.history.push('/create-profile')
          }
        })
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form>
                    <h4>Username</h4>
                    <input 
                      type='text'
                      name='username'
                      value={this.state.username}
                      onChange={this.changeHandler}
                    />
                    <h4>Password</h4>
                    <input 
                      type='password'
                      name='password'
                      value={this.state.password}
                      onChange={this.changeHandler}
                    /><br />
                    <button onClick={this.register}>Sign Up!</button>
                    {this.props.loggingIn ? (
                      <h4>logging in...</h4>
                    ) : (
                      ''
                    )}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
})

export default connect(
  mapStateToProps,
  { register }
)(RegisterForm)