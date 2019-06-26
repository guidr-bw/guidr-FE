import React from 'react';
import { Route, Link } from 'react-router-dom';

import NewTrip from './NewTrip';
import Trips from './Trips';
import Profile from './Profile';
import TripDetail from './TripDetail';

function AppData () {
    return(
        <div>
            <nav>
                <Link to='/profile'>Profile</Link>
                <Link to='/trips'>Trips</Link>
                <Link to='/'>Sign Out</Link>
            </nav>
            <div>
                <h1>guidr</h1>
                <h2>Own the Outdoors</h2>
            </div>
            <Route path='/new-trip' component={NewTrip} />
            <Route path='/trips' component={Trips} />
            <Route path='/profile' component={Profile} />
            <Route path='/trip-details/:id' component={TripDetail} />
        </div>
    )
}

export default AppData