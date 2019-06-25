import React from 'react';
import { Link } from 'react-router-dom';

function TripDetail () {
    return(
        <div>
            <div>
                <p>Edit Trip</p>
                <p>Delete Trip</p>
            </div>
            <div>
                <h2>Cambodia</h2>
                <h2>2013</h2>
            </div>
            <p>Lorem ipsum</p>
            <Link to='/trips'>Back to Trips</Link>
        </div>
    )
}

export default TripDetail;