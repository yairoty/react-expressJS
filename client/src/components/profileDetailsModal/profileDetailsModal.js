import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import ProfileForm from '../profileForm/profileForm';
import API from '../../API';
import './profileDetailsModal.css';

class ProfileModal extends Component {
	constructor(props) {
		super(props);
		this.state = {id: '',
					  name: '',
					  originalName: '',
					  bio: '',
					  fb_id: '',
					  fb_src: null};

		this.handleChange = this.handleChange.bind(this);
	}

	async componentWillReceiveProps(nextProps) {
		if(nextProps.profile){
			this.setState({
				id: nextProps.profile.id,
				name: nextProps.profile.name,
				originalName: nextProps.profile.name,
				bio: nextProps.profile.bio,
				fb_id: nextProps.profile.fb_id});
			
			// TODO move to store
			const fb_res = await API.get(`/${nextProps.profile.fb_id}/picture`, {
				params: {
					results: 1,
					inc: 'picture'
				}
			});			

			this.setState({
				fb_src: fb_res});
		}
	}

	handleChange(event) {
		const {name, value} = event.target;
		
		this.setState({
			[name]: value
		});
	}	

	render(){
		return (
			<Modal
			  {...this.props}
			  size="lg"
			  aria-labelledby="contained-modal-title-vcenter"
			  centered
			>
			  <Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<div className="profile-title-container">
						<div className="profile-img-placeholder">
							<img className="img-thumbnail rounded-circle"
								src={this.state.src}
								alt=''
								style={{ width: "32px", height: "32px" }}/>
						</div>
						<div className="profile-name">
							Edit {this.state.originalName} {this.state.id}
						</div>	
					</div>								
				</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				  <div className="form-group stretch">
					  <ProfileForm name={this.state.name}
								   bio={this.state.bio}
								   fb_id={this.state.fb_id}
								   handleChange={this.handleChange}></ProfileForm>					  
				  </div>
			  </Modal.Body>
			  <Modal.Footer>
			    <button className="btn btn-secondary" 
						onClick={this.props.onHide}>Cancel</button>
				<button className="btn btn-primary" 
						onClick={()=> {this.props.handleUpdate({id: this.state.id,
																name: this.state.name,
																bio: this.state.bio,
																fb_id: this.state.fb_id});
									   this.props.onHide();}}>Update</button>
			  </Modal.Footer>
			</Modal>
		  );
	}
}

export default ProfileModal;