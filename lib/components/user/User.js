import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserTabs from './UserTabs';

const User = ({}) => {
    return (
      <div>
          <UserTabs/>
      </div>
    );
};


export default User;
