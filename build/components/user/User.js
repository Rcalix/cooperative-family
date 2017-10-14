'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserForm = require('./UserForm');

var _UserForm2 = _interopRequireDefault(_UserForm);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';
// import { Segment, Container } from 'semantic-ui-react';
// import  { BrowserRouter as Router, Router, Link} from 'react-router-dom';
class User extends _react2.default.Component {

  constructor(props, context) {
    super(props, context);

    this.updateUser = event => {
      const field = event.target.name;
      let user = Object.assign({}, this.state.user);
      user[field] = event.target.value;
      return this.setState({ user: user });
    };

    this.validateEmail = email => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    this.formIsValid = () => {
      let errors = [];
      let valid = true;
      if (!this.state.user.nombre || !isNaN(this.state.user.nombre)) {
        errors.push('El nombre no puede ser vacio o un numero');
        valid = false;
      }

      if (!this.validateEmail(this.state.user.email)) {
        errors.push('El email no puede ser o no esta bien formado');
        valid = false;
      }

      if (!this.state.user.telefono || isNaN(this.state.user.telefono)) {
        errors.push('El telefono no puede ser vacio o leras');
        valid = false;
      }

      if (!this.state.user.direccion) {
        errors.push('El direccion no puede ser vacio');
        valid = false;
      }

      if (!this.state.user.identidad || isNaN(this.state.user.identidad)) {
        errors.push('El identidad no puede ser vacio o un letras');
        valid = false;
      }
      this.setState({ errors: errors });
      return valid;
    };

    this.saveUser = event => {
      event.preventDefault();
      if (!this.formIsValid()) {
        return;
      }
      // console.log(this.state.user);

      // axios.post('http://localhost:8080/api/user', {
      //   name: this.state.user.nombre,
      //   email: this.state.user.email,
      //   number: this.state.user.telefono,
      //   direccion: this.state.user.direccion,
      //   identidad: this.state.user.identidad
      // }).then(function (response) {
      //   console.log(response);
      // }).catch(function (error) {
      //   console.log(error);
      // });
    };

    this.state = {
      user: Object.assign({}, props.user),
      errors: []
    };
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {}

  render() {
    return _react2.default.createElement(_UserForm2.default, {
      onSave: this.saveUser,
      onChange: this.updateUser,
      onErrors: this.state.errors
    });
  }
}

exports.default = User;