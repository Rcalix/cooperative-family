import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.aportaciones, action) {
  switch (action.type) {
  case types.LOAD_APORTACIONES_SUCCESS:
    return action.aportaciones;
  default:
    return state;
      
  }
}