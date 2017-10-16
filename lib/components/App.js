import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container } from 'semantic-ui-react';
import  { HashRouter as Router, Route} from 'react-router-dom';
import Cards from './cards';
import User from './user/User';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  render() {
    return (  
      <Router>
        <div>
          <Segment inverted>
            Cooperative 
          </Segment>
          <Container>    
            <Route exact path="/" component={Cards}/>
            <Route path="/user" component={User}/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
