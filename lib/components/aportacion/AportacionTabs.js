import React from 'react';
import { Tab } from 'semantic-ui-react';
import AportacionList from './AportacionList';
import AportacionManage from './AportacionManage';

class AportacionTabs extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      panes: [
        { menuItem: 'Nueva Aportacion', render: () => <AportacionManage/> },
        { menuItem: 'Lista de Aportaciones', render: () =>  <AportacionList/> },
      ]

    };
  }
  render() {
    return (
      <Tab menu={{ secondary: true, pointing: true }} panes={this.state.panes} />
    );
  }
}

export default AportacionTabs;