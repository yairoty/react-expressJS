import {PROFILE_MODAL_DATA_LOADED} from '../actions/constants'

const modalReducer = (state = null, {type, payload}) => {
  console.log('[modalReducer] ', type , payload);

  switch (type) {
    case PROFILE_MODAL_DATA_LOADED:
      return payload;
      
    default:
      return state
  }  
}

export default modalReducer;
