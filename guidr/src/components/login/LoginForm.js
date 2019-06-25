import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions'

class LoginForm extends React.Component {
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

    signIn = e => {
      e.preventDefault();
      this.props.login(this.state)
        .then(res => {
          if (res) {
            this.props.history.push('/profile')
          }
        })
      this.setState({ password: '' })
    }

    render() {
        return (
            <div>
                <form>
                    <h4>Email</h4>
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
                    /><br/>
                    <button onClick={this.signIn}>Sign In!</button>
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
  { login }
)(LoginForm)