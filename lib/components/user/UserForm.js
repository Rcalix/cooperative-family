import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

const UserForm = ({onSave, onChange, onErrors}) => {
  return (
    <div>
      <Form>
        <Form.Field label="Identidad" 
          placeholder="Identidad" 
          name="identidad" 
          control="input" 
          onChange={onChange}>
        </Form.Field>
        <Form.Field label="Nombre" 
          placeholder="Nombre" 
          name="nombre" 
          control="input" 
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Email" 
          placeholder="Email" 
          name="email" 
          control="input" 
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Numero de Telefono" 
          placeholder="Numero de Telefono" 
          name="telefono" 
          control="input" 
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Direccion" 
          placeholder="Direccion" 
          name="direccion" 
          control="input" 
          onChange={onChange}>
        </Form.Field>
        <Form.Group widths='equal'>
          <Button negative fluid>Cancelar</Button>
          <Button positive fluid type="submit" onClick={onSave}>Guardar</Button>
        </Form.Group> 
      </Form>
      {onErrors.length >0 && <Message
        error
        header='Parece que hay un error en el formulario'
        list={onErrors}
      />

      }
    </div>
  );
};

export default UserForm;