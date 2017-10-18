import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
// import StateApi from 'state-api';
import App from 'components/App';
// const store = new StateApi(window.initialData);
let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
