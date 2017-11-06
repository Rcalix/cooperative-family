import React from 'react';
import { Table} from 'semantic-ui-react';

const AportacionRow = ({idAportacion, identidad, cantidad, fechaDeIngreso}) => {
  return (
    <Table.Row>
      <Table.Cell>{identidad}</Table.Cell>
      <Table.Cell>{fechaDeIngreso}</Table.Cell>
      <Table.Cell>{cantidad}</Table.Cell>
      <Table.Cell>{idAportacion}</Table.Cell>
    </Table.Row>
  );
};

export default AportacionRow;