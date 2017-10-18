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
      users: [],
      success: false,
      errors: []
    };
    this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.clear = this.clear.bind(this);
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
    if (!(this.state.user.fullName) || !isNaN(this.state.user.fullName))
    { 
      errors.push('El nombre no puede ser vacio o un numero');
      valid = false;
    }
    
    if (!(this.validateEmail(this.state.user.email)))
    { 
      errors.push('El email no puede que este vacio o no esta bien formado');
      valid = false;
    }

    if (!(this.state.user.numeroTelefono) || isNaN(this.state.user.numeroTelefono))
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
        this.setState({success: true});
      })
      .catch(error => {
        // console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    let newUsers = [];
    if (this.props.users.data) {
      let usersExist = this.props.users.data.filter(function(user) {
        return user.identidad == nextProps.users[0].identidad;
      });
      if (usersExist.length === 0) {
        newUsers = this.props.users.data;
        newUsers.push(nextProps.users[0]);
        this.setState({users:newUsers});
      } 
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
  clear () {
    const clearUser = {fullName: '', email: '', numeroTelefono: '', direccion: '', identidad:''};
    this.setState({user: clearUser});
  }
  render() {
    return (
      <div>
        <UserForm
          onSave={this.saveUser}
          onChange={this.updateUser}
          onErrors={this.state.errors}
          onSuccess={this.state.success}
          onClear={this.clear}
          onValue={this.state.user}
        />
        {this.props.users.data && this.state.users.length == 0 &&
          <Userlist data={this.props.users.data}/>
        }
        {this.state.users.length >0 &&
           <Userlist data={this.state.users}/>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
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