import {GET_PROFILES, NEW_PROFILE, REMOVE_PROFILE, UPDATE_PROFILE, PROFILE_MODAL_DATA_LOADED} from './constants';

const getProfiles = () => dispatch => {
  return fetch('/api/profiles')
    .then(res => res.json())
    .then(profiles => dispatch({type: GET_PROFILES, payload: profiles}))
}

const createProfile = (profile) => dispatch => {
  const options = {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  };

  return fetch('/api/profile', options)
         .then(res => res && res.json())
         .then(profile => dispatch({type: NEW_PROFILE,
                                    payload: profile}));
}

const deleteProfile = (id) => dispatch => {
  const options = {
    method: 'DELETE'  
  };

  return fetch(`/api/profile/${id}`, options)
         .then(res => res && res.json())
         .then(() => dispatch({type: REMOVE_PROFILE, 
                               payload: id}));
}

const updateProfile = (profile) => dispatch => {
  const options = {
    method: 'PUT',
    headers: {
          'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  };

  return fetch(`/api/profile/${profile.id}`, options)
         .then(res => res && res.json())
         .then(() => dispatch({type: UPDATE_PROFILE, 
                               payload: profile}));
}

const updateProfileModal = (profileData) => dispatch => {
  return dispatch({type: PROFILE_MODAL_DATA_LOADED, 
                   payload: profileData});
}

export {
  getProfiles,
  createProfile,
  deleteProfile,
  updateProfile,
  updateProfileModal
}
