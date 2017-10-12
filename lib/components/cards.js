import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import  {Link} from 'react-router-dom';

class Cards extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Link to='/user'>
            <Icon name='users' color='blue' size='huge'/>
              Usuarios
            <Card.Header>
            </Card.Header>
          </Link>
        </Card.Content>
        <Card.Content extra>
            Crear, Editar usuarios
        </Card.Content>
      </Card>
    );
  }
}

export default Cards;
