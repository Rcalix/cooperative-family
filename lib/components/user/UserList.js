import React from 'react';
import { Table} from 'semantic-ui-react';
import UserListRow from './UserListRow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions  from '../../actions/userActions';
class  UserList extends React.Component {

   constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user),
      users: []
    };
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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Correo</Table.HeaderCell>
          <Table.HeaderCell>Identidad</Table.HeaderCell>
          <Table.HeaderCell>Direccion</Table.HeaderCell>
          <Table.HeaderCell>Numero de Telefono</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.props.users.data && this.props.users.data.map(user => 
          <UserListRow key={user.identidad} 
            name={user.fullName} 
            email={user.email} 
            identidad={user.identidad}
            direccion={user.direccion} 
            numeroTelefono={user.numeroTelefono} />
        )}
      </Table.Body>
    </Table>
  );
  };
};


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


export default connect(mapStateToProps, mapDispatchToProps)(UserList);