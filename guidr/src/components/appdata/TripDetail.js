import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTrip, deleteTrip } from '../../actions';

class TripDetail extends React.Component {

    deleteTrip = (id) => {
        this.props.deleteTrip(id)
        this.props.history.push(`/trips`)
    }
    
    render () {
        const trip = this.props.individualTripData;
        return(
            <div>
                <div>
                    <p>Edit Trip</p>
                    <p onClick={() => this.deleteTrip(trip.id)}>Delete Trip</p>
                </div>
                <div>
                    <h2>{trip.title}</h2>
                    <h2>{trip.date}</h2>
                </div>
                <div>
                    <p>{trip.distance}</p>
                    <p>{trip.type}</p>
                </div>
                <img src={trip.image} alt='trip' />
                <p>{trip.description}</p>
                <Link to='/trips'>Back to Trips</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    individualTripData: state.individualTripData
})

export default connect(
    mapStateToProps,
    { fetchTrip, deleteTrip }
)(TripDetail)