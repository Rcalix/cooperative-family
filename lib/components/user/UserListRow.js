import React from 'react';
import { Table} from 'semantic-ui-react';

const UserListRow = ({name, identidad, email, direccion, numeroTelefono}) => {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{identidad}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{direccion}</Table.Cell>
      <Table.Cell>{numeroTelefono}</Table.Cell>
    </Table.Row>
  );
};

export default UserListRow;