import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import  {Link} from 'react-router-dom';

class Cards extends React.Component {
  render() {
    return (
      <div> 
        <Card.Group>
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
          <Card>
            <Card.Content>
              <Link to='/aportacion'>
                <Icon name='money' color='green' size='huge'/>
                  Aportaciones
                <Card.Header>
                </Card.Header>
              </Link>
            </Card.Content>
            <Card.Content extra>
                Aportar, saldo
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default Cards;
