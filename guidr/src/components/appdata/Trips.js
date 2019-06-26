import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTrips } from '../../actions';

class Trips extends React.Component {

    componentDidMount() {
        this.props.getTrips();
    }

    render(){
        return(
            <div>
                <h2>Trips</h2>
                <Link to='/new-trip'>Add a new trip</Link>
                <section>
                    {this.props.tripData.map(trip => {
                        return (
                            <div key={trip.id}>
                                <img src={trip.image} alt='trip' />
                                <h2>{trip.title}</h2>
                                <p>{trip.shortDescription}</p>
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tripData: state.tripData
})

export default connect(
    mapStateToProps,
        { getTrips }
)(Trips)