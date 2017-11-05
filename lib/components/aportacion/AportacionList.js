import React from 'react';
import _ from 'lodash';
import { Table} from 'semantic-ui-react';
import AportacionRow from './AportacionRow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aportacionActions  from '../../actions/aportacionActions';
class  AportacionList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      column: null,
      data: this.props.aportaciones.data,
      direccion: null,
    };
  }

  componentDidMount() {
    this.props.actions.loadAportaciones()
      .then(() => {
        this.setState({data: this.props.aportaciones.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
  sort = clickColumn => () => {
    const {column, data, direction} = this.state;
    if (column !== clickColumn) {
      this.setState({
        column: clickColumn,
        data: _.sortBy(data, [clickColumn]),
        direction: 'ascending',
      })
      return
    }

     this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }
  render() {
    const {column, data, direction} = this.state
  return (
    <Table celled sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sorted={column === 'nombre' ? direction: null} onClick={this.sort('nombre')}>Nombre</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'identidad' ? direction: null} onClick={this.sort('identidad')}>Identidad</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'correo' ? direction: null} onClick={this.sort('correo')}>correo</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'direccion' ? direction: null} onClick={this.sort('direccion')}>Direccion</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'telefono' ? direction: null} onClick={this.sort('telefono')}>Numero de Telefono</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data && data.map(user => 
          <AportacionRow key={user.identidad} 
            name={user.fullName} 
            email={user.email} 
            identidad={user.identidad}
            direccion={user.direccion} 
            numeroTelefono={user.numeroTelefono} />
        )}
      </Table.Body>
    </Table>
  );
  };
};


function mapStateToProps(state) {
  return {
    aportaciones:  state.aportaciones
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(aportacionActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AportacionList);

