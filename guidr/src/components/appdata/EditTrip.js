import React from 'react';
import { connect } from 'react-redux';

import { editTrip } from '../../actions';

class EditTrip extends React.Component {
    state = {
        user_id: this.props.userData.id,
        title: this.props.trip.title,
        shortDescription: this.props.trip.shortDescription,
        description: this.props.trip.description,
        isProfessional: this.props.trip.isProfessional,
        type: 1,
        duration: this.props.trip.duration,
        distance: this.props.trip.distance,
        date: this.props.trip.date,
        image: this.props.trip.image,
    }

    changeHandler = e => {
      e.preventDefault();

      this.setState({
        [e.target.name]: e.target.value
      })
    }

    editTrip = id => {
    //   e.preventDefault();
    console.log(this.state)
      this.props.editTrip(id, this.state)
        .then(res => {
          if (res) {
            this.props.history.push(`/trip-details/${this.props.trip.id}`)
          }
        })
    }

    render(){
      console.log(this.props.trip)
        return(
            <div>
                <h4>Name of Trip</h4>
                <input 
                  type='text'
                  name='title'
                  value={this.state.title}
                  onChange={this.changeHandler}
                />
                <h4>Short Description</h4>
                <input 
                  type='text'
                  name='shortDescription'
                  value={this.state.shortDescription}
                  onChange={this.changeHandler}
                />
                <h4>Trip Duration</h4>
                <input 
                  type='number'
                  name='duration'
                  value={this.state.duration}
                  onChange={this.changeHandler}
                />
                <form>
                    <label>
                        <input 
                            type='radio' 
                            name ='isProfessional' 
                            value='true'
                            onChange={this.changeHandler}
                        />
                        Professional
                    </label>
                    <label>
                        <input 
                            type='radio' 
                            name ='isProfessional' 
                            value='false'
                            onChange={this.changeHandler}
                        />
                        Personal
                    </label>
                </form>
                <h4>Trip Distance</h4>
                <input 
                  type='number'
                  name='distance'
                  value={this.state.distance}
                  onChange={this.changeHandler}
                />
                <form>
                    <label><input type='radio' name='duration' value='miles' />Miles</label>
                    <label><input type='radio' name='duration' value='km' />Km</label>
                    <label><input type='radio' name='duration' value='days' />Days</label>
                </form>
                <h4>Date of Trip</h4>
                <input 
                  type='text'
                  name='date'
                  value={this.state.date}
                  onChange={this.changeHandler}
                />
                <h4>Trip Summary</h4>
                <input 
                  type='text'
                  name='description'
                  value={this.state.description}
                  onChange={this.changeHandler}
                />
                <h4>Trip Image URL</h4>
                <input 
                  type='text'
                  name='image'
                  value={this.state.image}
                  onChange={this.changeHandler}
                />
                <br />
                <button onClick={() => this.editTrip(this.props.trip.id)}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  userData: state.userData,
  trip: state.individualTripData
})

export default connect(
  mapStateToProps,
  { editTrip }
) (EditTrip)
