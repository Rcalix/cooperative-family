'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _semanticUiReact = require('semantic-ui-react');

var _UserListRow = require('./UserListRow');

var _UserListRow2 = _interopRequireDefault(_UserListRow);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _userActions = require('../../actions/userActions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserList extends _react2.default.Component {

  constructor(props, context) {
    super(props, context);

    this.sort = clickColumn => () => {
      const { column, data, direction } = this.state;

      if (column !== clickColumn) {
        this.setState({
          column: clickColumn,
          data: _lodash2.default.sortBy(data, [clickColumn]),
          direction: 'ascending'
        });
        return;
      }

      this.setState({
        data: data.reverse(),
        direction: direction === 'ascending' ? 'descending' : 'ascending'
      });
    };

    this.state = {
      column: null,
      data: this.props.users.data,
      direccion: null
    };
  }

  componentDidMount() {
    this.props.actions.loadUsers().then(() => {
      this.setState({ data: this.props.users.data });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { column, data, direction } = this.state;
    console.log(data);
    return _react2.default.createElement(
      _semanticUiReact.Table,
      { celled: true, sortable: true },
      _react2.default.createElement(
        _semanticUiReact.Table.Header,
        null,
        _react2.default.createElement(
          _semanticUiReact.Table.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Table.HeaderCell,
            { sorted: column === 'nombre' ? direction : null, onClick: this.sort('nombre') },
            'Nombre'
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.HeaderCell,
            { sorted: column === 'identidad' ? direction : null, onClick: this.sort('identidad') },
            'Identidad'
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.HeaderCell,
            { sorted: column === 'correo' ? direction : null, onClick: this.sort('correo') },
            'correo'
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.HeaderCell,
            { sorted: column === 'direccion' ? direction : null, onClick: this.sort('direccion') },
            'Direccion'
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.HeaderCell,
            { sorted: column === 'telefono' ? direction : null, onClick: this.sort('telefono') },
            'Numero de Telefono'
          )
        )
      ),
      _react2.default.createElement(
        _semanticUiReact.Table.Body,
        null,
        data && data.map(user => _react2.default.createElement(_UserListRow2.default, { key: user.identidad,
          name: user.fullName,
          email: user.email,
          identidad: user.identidad,
          direccion: user.direccion,
          numeroTelefono: user.numeroTelefono }))
      )
    );
  }
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(userActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);