'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _UserListRow = require('./UserListRow');

var _UserListRow2 = _interopRequireDefault(_UserListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserList = ({ data }) => {
  return _react2.default.createElement(
    _semanticUiReact.Table,
    { celled: true },
    _react2.default.createElement(
      _semanticUiReact.Table.Header,
      null,
      _react2.default.createElement(
        _semanticUiReact.Table.Row,
        null,
        _react2.default.createElement(
          _semanticUiReact.Table.HeaderCell,
          null,
          'Nombre'
        ),
        _react2.default.createElement(
          _semanticUiReact.Table.HeaderCell,
          null,
          'Correo'
        ),
        _react2.default.createElement(
          _semanticUiReact.Table.HeaderCell,
          null,
          'Identidad'
        ),
        _react2.default.createElement(
          _semanticUiReact.Table.HeaderCell,
          null,
          'Direccion'
        ),
        _react2.default.createElement(
          _semanticUiReact.Table.HeaderCell,
          null,
          'Numero de Telefono'
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Table.Body,
      null,
      data.map(user => _react2.default.createElement(_UserListRow2.default, { key: user.identidad,
        name: user.fullName,
        email: user.email,
        identidad: user.identidad,
        direccion: user.direccion,
        numeroTelefono: user.numeroTelefono }))
    )
  );
};

exports.default = UserList;