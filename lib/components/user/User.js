import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions  from '../../actions/userActions';
// import PropTypes from 'prop-types';
// import { Segment, Container } from 'semantic-ui-react';
// import  { BrowserRouter as Router, Router, Link} from 'react-router-dom';
import UserForm from './UserForm';
import Userlist from './UserList';

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
      errors.push('El email no puede que este vacio o no esta bien formado');
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
    this.props.actions.saveUser(this.state.user)
      .then(() => {
        // console.log(this.props.users.data);
      })
      .catch(error => {
        // console.log(error);
      });
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

  componentWillReceiveProps(nextProps) {
    if (this.props.users.identidad != nextProps.users.identidad) {
      this.setState({users: Object.assign({}, nextProps.users)});
      console.log('qweqeqwe')
    console.log(this.state);
    }
  }
  componentDidMount() {
    this.props.actions.loadUsers()
      .then(() => {
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <UserForm
          onSave={this.saveUser}
          onChange={this.updateUser}
          onErrors={this.state.errors}
        />
        {this.props.users.data &&
          <Userlist data={this.props.users.data}/>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    users:  state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(User);
