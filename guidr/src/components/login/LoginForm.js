import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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
                <h2>Login</h2>
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
                    /><br/>
                    <button onClick={this.signIn}>Sign In!</button>
                    {this.props.loggingIn ? (
                      <h4>logging in...</h4>
                    ) : (
                      ''
                    )}
                </form>
                <Link to='/create-account'>New to guidr? Register Here!</Link>
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