import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getProfiles, createProfile, deleteProfile, updateProfile, updateProfileModal} from '../../store/actions/profiles'
import './profiles.css';
import AddProfileForm from '../AddProfileForm/addProfileForm';
import ImgCard from '../ImgCard/imgCard';
import ProfileDetailsModal from '../profileDetailsModal/profileDetailsModal';

class Profiles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {modalShow: null};
  }

  static propTypes = {
    getProfiles: PropTypes.func.isRequired,
    createProfile: PropTypes.func.isRequired,
    deleteProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    updateProfileModal: PropTypes.func.isRequired,
    profiles: PropTypes.array.isRequired,
    profileModalData: PropTypes.any
  }

  static defaultProps = {
    profiles: [],
    profileModalData: null
  }  

  componentWillMount() {
    this.props.getProfiles();
  }

  render() {
    const {profiles, createProfile, updateProfileModal, profileModalData, updateProfile} = this.props;
    
    return (
      <Fragment>
        <ProfileDetailsModal show={Boolean(profileModalData)}
                             onHide={() => updateProfileModal(null)}
                             handleUpdate={updateProfile}
                             profile={profileModalData}></ProfileDetailsModal>
        <div className="sticky-header-panel">
          <AddProfileForm onAddProfile={createProfile}/>
        </div>        
        <div className="profile-cards-list">
          {profiles.map(profile =>
            <div key={profile.id}>
              <ImgCard id={profile.id}
                       name={profile.name} 
                       handleEdit={updateProfileModal.bind(this, profile)}></ImgCard>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapProps = (state) => ({
  profiles: state.profiles,
  profileModalData: state.modal
})

const dispatchToProps = dispatch => ({
   getProfiles: () => dispatch(getProfiles()),
   createProfile: (profile) => dispatch(createProfile(profile)),
   deleteProfile: (id) => dispatch(deleteProfile(id)),
   updateProfile: (profile) => dispatch(updateProfile(profile)),
   updateProfileModal: (profile) => dispatch(updateProfileModal(profile))
   
})

export default connect(mapProps, dispatchToProps)(Profiles);
