import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

const UserForm = ({onSave, onChange, onErrors, onSuccess, onClear, onValue}) => {
  return (
    <div>
      <Form>
        <Form.Field label="Identidad" 
          placeholder="Identidad" 
          name="identidad" 
          control="input" 
          value={onValue.identidad}
          onChange={onChange}>
        </Form.Field>
        <Form.Field label="Nombre" 
          placeholder="Nombre" 
          name="fullName" 
          control="input" 
          value={onValue.fullName}
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Email" 
          placeholder="Email" 
          name="email" 
          control="input" 
          value={onValue.email}
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Numero de Telefono" 
          placeholder="Numero de Telefono" 
          name="numeroTelefono" 
          control="input" 
          value={onValue.numeroTelefono}
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Direccion" 
          placeholder="Direccion" 
          name="direccion" 
          control="input"
          value={onValue.direccion}
          onChange={onChange}>
        </Form.Field>
        <Form.Group widths='equal'>
          <Button negative fluid onClick={onClear}>Cancelar</Button>
          <Button positive fluid type="submit" onClick={onSave}>Guardar</Button>
        </Form.Group> 
      </Form>
      {onErrors.length >0 && <Message
        error
        header='Parece que hay un error en el formulario'
        list={onErrors}
      />

      }
      { onSuccess === true && <Message
        success
        header='Guardado'
        content= 'El usuario se ha guardado'
      />

      }
    </div>
  );
};

export default UserForm;