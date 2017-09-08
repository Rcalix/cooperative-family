import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
// import {data} from '../testData';

// const api = new DataApi(data);

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() { 
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);  
  }

  componentWillMount() {
    this.props.store.unsubscribe(this.susbcriptionId);
  }

  // setSearchTerm = (searchTerm) => {
  //   this.setState({searchTerm});
  // };
  // update when the store state changes .. subscribe....
  render() {
    let {articles, searchTerm} = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    
    return (
       <div>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
        </div>
    );
  }
}

export default App;