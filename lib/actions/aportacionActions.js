import axios from 'axios';
import * as types from './actionTypes';

let urBase;
console.log(ENV)
if (ENV === 'development') {
  urBase = 'http://localhost:8080/';
} else if (ENV === 'production' ){
  urBase = 'https://control-cooperative.herokuapp.com/';
}

export function loadAportacionesSuccess(aportacion) {
  return { type: types.LOAD_APORTACIONES_SUCCESS, aportacion };
}

export function createUser(users) {
  return { type: types.CREATE_USER_SUCCESS, users };
}

export function loadAportaciones() {
  return function(dispatch) {
    return axios.get(urBase + 'api/' + 'aportaciones').then(aportacion => {
      dispatch(loadAportacionesSuccess(aportacion));  
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    return axios.post(urBase + 'api/' + 'user', {
      name: user.fullName,
      email: user.email,
      number: user.numeroTelefono,
      direccion: user.direccion,
      identidad: user.identidad
    }).then(() => {
      dispatch(createUser(user));
    }).catch(error => {
      throw(error);
    });
  };
}