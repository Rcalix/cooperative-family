'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsersSucces = loadUsersSucces;
exports.createUser = createUser;
exports.loadUsers = loadUsers;
exports.saveUser = saveUser;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let urBase;
if (ENV === 'development') {
  urBase = 'http://localhost:8080/';
} else if (ENV === 'production') {
  urBase = 'https://control-cooperative.herokuapp.com/';
}

function loadUsersSucces(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

function createUser(users) {
  return { type: types.CREATE_USER_SUCCESS, users };
}

function loadUsers() {
  return function (dispatch) {
    return _axios2.default.get(urBase + 'api/' + 'users').then(users => {
      dispatch(loadUsersSucces(users));
    }).catch(error => {
      throw error;
    });
  };
}

function saveUser(user) {
  return function (dispatch, getState) {
    return _axios2.default.post(urBase + 'api/' + 'users', {
      name: user.fullName,
      email: user.email,
      number: user.numeroTelefono,
      direccion: user.direccion,
      identidad: user.identidad
    }).then(() => {
      // console.log(user);
      dispatch(createUser(user));
    }).catch(error => {
      throw error;
    });
  };
}