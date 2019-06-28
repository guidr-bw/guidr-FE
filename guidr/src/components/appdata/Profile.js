import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Profile.scss'

import { getData } from '../../actions'

class Profile extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render(){
        return(
            <div className='userData'>
                <img className='profileImg' src={this.props.userData.profilePic} alt='Profile' />
                <div className='userInfo'>
                    <h1>{this.props.userData.name}</h1>
                    <h2>{this.props.userData.age} years old</h2>
                    <h2>{this.props.userData.title}</h2>
                    <h2>{this.props.userData.yearsAsGuide} years as a guide</h2>
                </div>
                <p>{this.props.userData.tagline}</p>
                <div className='profileLinks'>
                    <Link className='editProfile' to='/create-profile'>Edit Profile</Link>
                    <Link className='viewTripsBtn' to='/app/trips'>View Trips</Link>
                </div>
            </div>
        )
        }
}

const mapStateToProps = state => ({
    userData: state.userData
})

export default connect(
    mapStateToProps,
        { getData }
)(Profile)
