import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Trips.scss'
import { getTrips, fetchTrip } from '../../actions';

class Trips extends React.Component {

    componentDidMount() {
        this.props.getTrips();
    }

    fetchTrip = (tripId) => {
        this.props.fetchTrip(tripId)
        this.props.history.push(`/app/trip-details/${tripId}`)
    }

    render(){
        return(
            <div className='tripFeed'>
                <h2>Trips Feed</h2>
                <Link className='tripFeedLink' to='/app/new-trip'>Add a new trip</Link>
                <section>
                    {this.props.tripData.map(trip => {
                        return (
                            <div className='trip' onClick={() => this.fetchTrip(trip.id)} key={trip.id}>
                                <img src={trip.image} alt='trip' />
                                <div className='tripContent'>
                                    <h2>{trip.title}</h2>
                                    <p>{trip.shortDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <div className='linkDiv'>
                    <Link className='tripFeedLink' to='/app/profile'>Back to Profile</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tripData: state.tripData
})

export default connect(
    mapStateToProps,
        { getTrips, fetchTrip }
)(Trips)