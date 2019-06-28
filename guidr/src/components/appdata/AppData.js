import React from 'react';
import { Route } from 'react-router-dom';

import NewTrip from './NewTrip';
import Trips from './Trips';
import Profile from './Profile';
import TripDetail from './TripDetail';
import EditTrip from './EditTrip';

function AppData () {
    return(
        <div>
            <Route path='/app/new-trip' component={NewTrip} />
            <Route path='/app/trips' component={Trips} />
            <Route path='/app/profile' component={Profile} />
            <Route path='/app/trip-details/:id' component={TripDetail} />
            <Route path='/app/edit-trip/:id' component={EditTrip} />
        </div>
    )
}

export default AppData