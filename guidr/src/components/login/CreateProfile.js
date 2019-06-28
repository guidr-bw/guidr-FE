import React from 'react';
import { connect } from 'react-redux';

import './CreateProfile.scss'
import { addProfile } from '../../actions'

class CreateProfile extends React.Component {
    state = {
        profilePic: '',
        username: '',
        name: '',
        age: '',
        title: '',
        yearsAsGuide: '',
        tagline: '',
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
                    this.props.history.push('/app/profile')
                }
            })
    }

    render () {
        return(
            <div className='profileForm'>
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
                    <h4>Years as a Guide</h4>
                    <input 
                        type='number'
                        name='yearsAsGuide'
                        value={this.state.yearsAsGuide}
                        onChange={this.changeHandler}
                    />
                    <h4>Tagline</h4>
                    <textarea 
                        className='taglineBox'
                        rows='4'
                        wrap='hard'
                        cols='48'
                        type='text'
                        name='tagline'
                        value={this.state.tagline}
                        onChange={this.changeHandler}
                    />
                    <div className='profileBtn'>
                        <button onClick={this.addProfile}>Submit</button>
                    </div>
                </form>
                {this.props.error ? (
                  <h4>{this.props.error}</h4>
                ) : (
                  ''
                )}
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