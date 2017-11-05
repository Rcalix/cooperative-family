import {combineReducers} from 'redux';
import users from './userReducer';
import aportaciones from './AportacionReducer';

const rootReducer = combineReducers({
  users,
  aportaciones
});

export default rootReducer;