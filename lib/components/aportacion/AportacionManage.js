import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions  from '../../actions/userActions';
import * as aportacionActions  from '../../actions/aportacionActions';
import AportacionForm from './AportacionForm';

class AportacionManage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {fullName: '', email: '', numeroTelefono: '', direccion: '', identidad:''},
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
    let errors = [];
    this.props.actions.saveUser(this.state.user)
      .then(() => {
        this.setState({success: true});
      })
      .catch(error => {
        errors.push('El identidade esta duplicada');
        this.setState({errors: errors});
      });
  }
 
  componentDidMount() {
    Object.assign({}, this.props.user);
    this.props.userActions.loadUsers()
      .then(() => {
        this.setState({users: this.props.users.data});
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
        <AportacionForm
          onSave={this.saveUser}
          onChange={this.updateUser}
          onErrors={this.state.errors}
          onSuccess={this.state.success}
          onClear={this.clear}
          onValue={this.state.user}
          users={this.state.users}
        />
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
    userActions: bindActionCreators(userActions, dispatch),
    aportacionActions: bindActionCreators(aportacionActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AportacionManage);
