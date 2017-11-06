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
        this.setState({data: this.props.aportaciones});
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
    const {column, data, direction} = this.state;
    return (
      <Table celled sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'identidad' ? direction: null} onClick={this.sort('identidad')}>Identidad</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'fecha' ? direction: null} onClick={this.sort('fecha')}>Fecha de Ingreso</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'cantidad' ? direction: null} onClick={this.sort('cantidad')}>cantidad</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'idAportacion' ? direction: null} onClick={this.sort('idAportacion')}>Numero de Aportacion</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data && data.map(aportacion => 
            <AportacionRow key={aportacion.idAportacion} 
              idAportacion={aportacion.idAportacion} 
              identidad={aportacion.identidad}
              cantidad={aportacion.cantidad} 
              fechaDeIngreso={aportacion.fechaDeIngreso} />
          )}
        </Table.Body>
      </Table>
    );
  }
}


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

