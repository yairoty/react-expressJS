import {GET_PROFILES, NEW_PROFILE, REMOVE_PROFILE, UPDATE_PROFILE} from '../actions/constants'

const profilesReducer = (state = [], {type, payload}) => {
  console.log('[profilesReducer] ', type , payload);

  switch (type) {
    case GET_PROFILES:
      return payload;

    case NEW_PROFILE:
      return [...state, 
              payload];

    case UPDATE_PROFILE:
      return state.map(profile => (profile.id === payload.id) ? payload : profile);
              
    case REMOVE_PROFILE:
      return state.filter(profile => profile.id !== payload);
      
    default:
      return state
  }
}

export default profilesReducer;
