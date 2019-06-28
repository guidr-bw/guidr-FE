import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './TripDetail.scss'

import { fetchTrip, deleteTrip, editTrip } from '../../actions';

class TripDetail extends React.Component {

    deleteTrip = (id) => {
        this.props.deleteTrip(id)
        this.props.history.push(`/app/trips`)
    }

    editTrip = (id) => {
        this.props.history.push(`/app/edit-trip/${id}`)
    }
    
    render () {
        const trip = this.props.individualTripData;
        return(
            <div className='tripInfo'>
                <div className='tripNav'>
                    <p onClick={() => this.editTrip(trip.id)}>Edit Trip</p>
                    <p onClick={() => this.deleteTrip(trip.id)}>Delete Trip</p>
                </div>
                <div className='tripHeader'>
                    <h2>{trip.title}</h2>
                    <h2>{trip.date}</h2>
                </div>
                <div className='tripDetails'>
                    {trip.isProfessional ? (
                        <p>Professional Trip</p>
                    ) : (
                        <p>Personal Trip</p>
                    )}
                    <p>{trip.distance} miles</p>
                    {/* <p>{trip.type}</p> */}
                </div>
                <div className='tripBody'>
                    <img src={trip.image} alt='trip' />
                    <p>{trip.description}</p>
                </div>
                <div className='linky'>
                    <Link className='tripLink' to='/app/trips'>Back to Trips</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    individualTripData: state.individualTripData
})

export default connect(
    mapStateToProps,
    { fetchTrip, deleteTrip, editTrip }
)(TripDetail)