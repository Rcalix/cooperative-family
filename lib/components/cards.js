import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

class Cards extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Icon name='users' color='blue' size='huge'/>
            Usuarios
          <Card.Header>
            
          </Card.Header>
          <Card.Description>
             
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            Crear, Editar usuarios
        </Card.Content>
      </Card>
    );
  }
}

export default Cards;
