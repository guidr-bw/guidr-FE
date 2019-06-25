import React from 'react';
import { Link } from 'react-router-dom';

function Profile () {
    return(
        <div>
            <div>
                <h1>Name</h1>
                <h2>years old</h2>
                <h2>Job Title</h2>
                <h2>total miles</h2>
            </div>
            <p>tagline</p>
            <div>
                <p>Edit Profile</p>
                <Link to='/trips'>View Trips</Link>
            </div>
        </div>
    )
}

export default Profile