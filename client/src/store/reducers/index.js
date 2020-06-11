import {combineReducers} from 'redux';
import profilesReducer from './profiles';
import modalReducer from './modal';

export default combineReducers({
  profiles: profilesReducer,
  modal: modalReducer
})
