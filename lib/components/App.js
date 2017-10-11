import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container } from 'semantic-ui-react';
import Cards from './cards';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  render() {
    return (
      <div>
        <Segment inverted>
          Cooperative 
        </Segment>
        <Container>
          <Cards/>
        </Container>
      </div>
    );
  }
}

export default App;
