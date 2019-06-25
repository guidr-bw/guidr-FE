import React from 'react';

class NewTrip extends React.Component {
    state = {
        tripName: '',
        timeFrame: '',
        length: '',
        tripType: '',
        description: '',
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addNewTrip = e => {
      e.preventDefault();
      this.props.history.push('/trips')
    }

    render(){
        return(
            <div>
                <h4>Name of Trip</h4>
                <input 
                  type='text'
                  name='tripName'
                  value={this.state.tripName}
                  onChange={this.changeHandler}
                />
                <h4>Timeframe</h4>
                <input 
                  type='number'
                  name='timeFrame'
                  value={this.state.timeFrame}
                  onChange={this.changeHandler}
                />
                <form>
                    <label><input type='radio' name='business' value='professional'/>Professional</label>
                    <label><input type='radio' name='business' value='personal'/>Personal</label>
                </form>
                <h4>Length</h4>
                <input 
                  type='number'
                  name='length'
                  value={this.state.length}
                  onChange={this.changeHandler}
                />
                <form>
                    <label><input type='radio' name='duration' value='miles' />Miles</label>
                    <label><input type='radio' name='duration' value='km' />Km</label>
                    <label><input type='radio' name='duration' value='days' />Days</label>
                </form>
                <h4>Type of Trip</h4>
                <input 
                  type='text'
                  name='tripType'
                  value={this.state.tripType}
                  onChange={this.changeHandler}
                />
                <h4>Description</h4>
                <input 
                  type='text'
                  name='description'
                  value={this.state.description}
                  onChange={this.changeHandler}
                /><br />
                <button onClick={this.addNewTrip}>Submit</button>
            </div>
        )
    }
}

export default NewTrip