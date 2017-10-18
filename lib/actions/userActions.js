import axios from 'axios';
import * as types from './actionTypes';
import OS from 'os';
export function loadUsersSucces(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function createUser(users) {
  return { type: types.CREATE_USER_SUCCESS, users };
}

export function loadUsers() {
  console.log(OS.hostname());
  return function(dispatch) {
    return axios.get('http://localhost:8080/api/users').then(users => {
      dispatch(loadUsersSucces(users));  
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    return axios.post('http://localhost:8080/api/user', {
      name: user.fullName,
      email: user.email,
      number: user.numeroTelefono,
      direccion: user.direccion,
      identidad: user.identidad
    }).then(() => {
      // console.log(user);
      dispatch(createUser(user));
    }).catch(error => {
      throw(error);
    });
  };
}