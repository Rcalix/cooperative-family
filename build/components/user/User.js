'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _userActions = require('../../actions/userActions');

var userActions = _interopRequireWildcard(_userActions);

var _UserForm = require('./UserForm');

var _UserForm2 = _interopRequireDefault(_UserForm);

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      if (!this.state.user.fullName || !isNaN(this.state.user.fullName)) {
        errors.push('El nombre no puede ser vacio o un numero');
        valid = false;
      }

      if (!this.validateEmail(this.state.user.email)) {
        errors.push('El email no puede que este vacio o no esta bien formado');
        valid = false;
      }

      if (!this.state.user.numeroTelefono || isNaN(this.state.user.numeroTelefono)) {
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
      this.props.actions.saveUser(this.state.user).then(() => {
        this.setState({ success: true });
      }).catch(error => {
        // console.log(error);
      });
    };

    this.state = {
      user: Object.assign({}, props.user),
      users: [],
      success: false,
      errors: []
    };
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let newUsers = [];
    if (this.props.users.data) {
      let usersExist = this.props.users.data.filter(function (user) {
        return user.identidad == nextProps.users[0].identidad;
      });
      if (usersExist.length === 0) {
        newUsers = this.props.users.data;
        newUsers.push(nextProps.users[0]);
        this.setState({ users: newUsers });
      }
    }
  }
  componentDidMount() {
    this.props.actions.loadUsers().then(() => {}).catch(error => {
      console.log(error);
    });
  }
  clear() {
    const clearUser = { fullName: '', email: '', numeroTelefono: '', direccion: '', identidad: '' };
    this.setState({ user: clearUser });
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_UserForm2.default, {
        onSave: this.saveUser,
        onChange: this.updateUser,
        onErrors: this.state.errors,
        onSuccess: this.state.success,
        onClear: this.clear,
        onValue: this.state.user
      }),
      this.props.users.data && this.state.users.length == 0 && _react2.default.createElement(_UserList2.default, { data: this.props.users.data }),
      this.state.users.length > 0 && _react2.default.createElement(_UserList2.default, { data: this.state.users })
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(userActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(User);