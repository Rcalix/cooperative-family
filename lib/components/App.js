import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Icon } from 'semantic-ui-react';
import  { HashRouter as Router, Route} from 'react-router-dom';
import Cards from './cards';
import User from './user/User';
import {Link} from 'react-router-dom';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  render() {
    return (  
      <Router>
        <div>
          <Link to='/'>
            <Segment inverted>
              <Icon name="fort awesome" size='large'/>
             Cooperative 
            </Segment>
            <br/>
            <br/>
          </Link> 
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
