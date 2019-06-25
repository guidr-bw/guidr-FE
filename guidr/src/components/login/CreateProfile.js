import React from 'react';

class CreateProfile extends React.Component {
    state = {
        imageUrl: '',
        name: '',
        age: '',
        title: '',
        tagline: ''
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addProfile = e => {
        this.props.history.push('/profile')
    }

    render () {
        return(
            <div>
                <form>
                    <h4>Add Image Url</h4>
                    <input 
                        type='text'
                        name='imageUrl'
                        value={this.state.imageUrl}
                        onChange={this.changeHandler}
                    />
                    <h4>Name</h4>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                    <h4>Age</h4>
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                    />
                    <h4>Title</h4>
                    <input 
                        type='text'
                        name='title'
                        value={this.state.tagline}
                        onChange={this.changeHandler}
                    />
                    <h4>Tagline</h4>
                    <input 
                        type='text'
                        name='tagline'
                        value={this.state.tagline}
                        onChange={this.changeHandler}
                    /> <br />
                    <button onClick={this.addProfile}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateProfile