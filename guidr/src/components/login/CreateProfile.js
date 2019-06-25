import React from 'react';
import { connect } from 'react-redux';

import { addProfile } from '../../actions'

class CreateProfile extends React.Component {
    state = {
        username: '',
        name: '',
        age: '',
        title: '',
        tagline: '',
        profilePic: '',
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addProfile = e => {
        e.preventDefault();
        this.props.addProfile(this.state)
            .then(res => {
                if (res) {
                    this.props.history.push('/profile')
                }
            })
    }

    render () {
        return(
            <div>
                <form>
                    <h4>Username</h4>
                    <input 
                      type='text'
                      name='username'
                      value={this.state.username}
                      onChange={this.changeHandler}
                    />
                    <h4>Profile Picture Url</h4>
                    <input 
                        type='text'
                        name='profilePic'
                        value={this.state.profilePic}
                        onChange={this.changeHandler}
                    />
                    <h4>Name</h4>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                    <h4>Age</h4>
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                    />
                    <h4>Title</h4>
                    <input 
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                    <h4>Tagline</h4>
                    <input 
                        type='text'
                        name='tagline'
                        value={this.state.tagline}
                        onChange={this.changeHandler}
                    /> <br />
                    <button onClick={this.addProfile}>Submit</button>
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
    { addProfile }
  )(CreateProfile)