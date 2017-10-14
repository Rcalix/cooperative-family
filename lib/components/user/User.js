import React from 'react';
// import PropTypes from 'prop-types';
// import { Segment, Container } from 'semantic-ui-react';
// import  { BrowserRouter as Router, Router, Link} from 'react-router-dom';
import UserForm from './UserForm';
import axios from 'axios';

class User extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user),
      errors: []
    };
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {

  }
  updateUser = (event) => {
    const field = event.target.name;
    let user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  validateEmail = (email) => {   
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  formIsValid = () => {
    let errors = [];
    let valid = true;
    if (!(this.state.user.nombre) || !isNaN(this.state.user.nombre))
    { 
      errors.push('El nombre no puede ser vacio o un numero');
      valid = false;
    }
    
    if (!(this.validateEmail(this.state.user.email)))
    { 
      errors.push('El email no puede ser o no esta bien formado');
      valid = false;
    }

    if (!(this.state.user.telefono) || isNaN(this.state.user.telefono))
    { 
      errors.push('El telefono no puede ser vacio o leras');
      valid = false;
    }

    if (!(this.state.user.direccion))
    { 
      errors.push('El direccion no puede ser vacio');
      valid = false;
    }

    if (!(this.state.user.identidad) || isNaN(this.state.user.identidad))
    { 
      errors.push('El identidad no puede ser vacio o un letras');
      valid = false;
    }
    this.setState({errors: errors});
    return valid;
  }
  saveUser = (event) => {
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
  }
  render() {
    return (
      <UserForm
        onSave={this.saveUser}
        onChange={this.updateUser}
        onErrors={this.state.errors}
      />
    );
  }
}

export default User;
