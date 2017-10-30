import {combineReducers} from 'redux';
import users from './userReducer';
import aportaciones from './AportacionesReducer';

const rootReducer = combineReducers({
  users,
  aportaciones
});

export default rootReducer;