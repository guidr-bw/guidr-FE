import React from 'react';
import { connect } from 'react-redux';

import './NewTrip.scss'

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
            this.props.history.push(`/app/trip-details/${this.props.trip.id}`)
          }
        })
    }

    render(){
      console.log(this.props.trip)
        return(
            <div className='formContainer'>
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
                  className='integer'
                  type='number'
                  name='duration'
                  value={this.state.duration}
                  onChange={this.changeHandler}
                />
                <form>
                    <label>
                        Professional
                        <input 
                            type='radio' 
                            name ='isProfessional' 
                            value={true}
                            onChange={this.changeHandler}
                        />
                    </label>
                    <label>
                        Personal
                        <input 
                            type='radio' 
                            name ='isProfessional' 
                            value={false}
                            onChange={this.changeHandler}
                        />
                    </label>
                </form>
                <h4>Trip Distance in Miles</h4>
                <input 
                  className='integer'
                  type='number'
                  name='distance'
                  value={this.state.distance}
                  onChange={this.changeHandler}
                />
                <h4>Date of Trip</h4>
                <input 
                  type='text'
                  name='date'
                  value={this.state.date}
                  onChange={this.changeHandler}
                />
                <h4>Trip Summary</h4>
                <textarea 
                  className='descriptionBox'
                  rows='4'
                  wrap='hard'
                  cols='48'
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
                <div className='submitButton'>
                  <button onClick={() => this.editTrip(this.props.trip.id)}>Submit</button>
                </div>
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
