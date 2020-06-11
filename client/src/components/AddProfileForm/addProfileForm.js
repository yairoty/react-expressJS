import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileForm from '../profileForm/profileForm';

class AddProfileForm extends Component {
    constructor(props) {
			super(props);
			
      this.state = {name: '',
                    bio: '',
										fb_id: ''};										
			// preserve initial state
    	this.baseState = this.state;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        onAddProfile: PropTypes.func.isRequired
    }
    
    static defaultProps = {
        onAddProfile: alert
    }
  
    handleChange(event) {
				const {name, value} = event.target;
				
				this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
      const {name, bio, fb_id} = this.state;
      const newProfile = {
         name,
         bio,
         fb_id
      }
      if(name !== undefined && name !== null && name !== ''){
        this.props.onAddProfile(newProfile);
			  this.setState(this.baseState);
      }      

			event.preventDefault();			
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-row">
                <ProfileForm name={this.state.name}
                             bio={this.state.bio}
                             fb_id={this.state.fb_id}
                             handleChange={this.handleChange}></ProfileForm>
                <button type="submit" 
                        value="Submit" 
                        className="btn btn-success">Create</button>
              </div>         
        </form>
      );
    }
  }

  export default AddProfileForm
  