import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import 'antd/dist/antd.css';
// import DatePicker from 'antd/lib/date-picker';  // for js
// import 'antd/lib/date-picker/style/css';  

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  render() {
    return (
      <div>
        {/* <DatePicker  /> */}
      </div>
    );
  }
}

export default App;
