import React from 'react';
import User from './User';
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
        { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
        ]

    };
  }
    render() {
        return (
             <Tab menu={{ secondary: true, pointing: true }} panes={this.state.panes} />
        );
    }
};
export default UserTabs;