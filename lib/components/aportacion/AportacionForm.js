import React from 'react';
import { Button, Form, Message, Dropdown } from 'semantic-ui-react';

const AportacionForm = ({onSave, onChange, onErrors, onSuccess, onClear, onValue, users}) => {
  let options = [];
  users.map(user => {
    let option = {};
    option = {key: user.identidad, value:user.identidad, text: user.fullName };
    options.push(option);
  });
  return (
    <div>
      <Form>
        <Form.Field label="Lista de aportadores"></Form.Field> 
        <Dropdown placeholder='Persona a aportar' fluid search selection options={options} />
        <Form.Field label="Cantidad" 
          placeholder="Cantidad" 
          name="cantidad" 
          control="input" 
          value={onValue.fullName}
          onChange={onChange}>
        </Form.Field>
        <Form.Field
          label="Fecha de Ingreso" 
          placeholder="Fecha" 
          name="fecha" 
          control="input" 
          value={onValue.email}
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

export default AportacionForm;