import React from 'react';
import { Table} from 'semantic-ui-react';
import UserListRow from './UserListRow';
const UserList = ({data}) => {
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
        {data.map(user => 
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

export default UserList;