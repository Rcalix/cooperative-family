import React from 'react';
import { Tab } from 'semantic-ui-react';
import UserList from './UserList';
import UserManage from './UserManage';

class UserTabs extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      panes: [
        { menuItem: 'Nuevo Usuario', render: () => <UserManage/> },
        { menuItem: 'Lista de Usuarios', render: () =>  <UserList/> },
      ]

    };
  }
  render() {
    return (
      <Tab menu={{ secondary: true, pointing: true }} panes={this.state.panes} />
    );
  }
}

export default UserTabs;