import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getData } from '../../actions'

class Profile extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render(){
        return(
            <div>
                <img src={this.props.userData.profilePic} alt='Profile' />
                <div>
                    <h1>{this.props.userData.name}</h1>
                    <h2>{this.props.userData.age} years old</h2>
                    <h2>{this.props.userData.title}</h2>
                    <h2>{this.props.userData.yearsAsGuide} years as a guide</h2>
                </div>
                <p>{this.props.userData.tagline}</p>
                <div>
                    <Link to='/create-profile'>Edit Profile</Link>
                    <Link to='/trips'>View Trips</Link>
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
