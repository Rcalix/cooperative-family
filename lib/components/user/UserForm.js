import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const UserForm = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Identidad</label>
          <input placeholder='Identidad' />
        </Form.Field>
        <Form.Field>
          <label>Nombre</label>
          <input placeholder='Nombre' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Numero de Telefono</label>
          <input placeholder='Numero de Telefono' />
        </Form.Field>
        <Form.Field>
          <label>Direccion</label>
          <input placeholder='Direccion' />
        </Form.Field>
        <Form.Group widths='equal'>
          <Button negative fluid>Cancelar</Button>
          <Button positive fluid>Guardar</Button>
        </Form.Group> 
      </Form>
    </div>
  );
};

export default UserForm;