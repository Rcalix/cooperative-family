'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserListRow = ({ name, identidad, email, direccion, numeroTelefono }) => {
  return _react2.default.createElement(
    _semanticUiReact.Table.Row,
    null,
    _react2.default.createElement(
      _semanticUiReact.Table.Cell,
      null,
      name
    ),
    _react2.default.createElement(
      _semanticUiReact.Table.Cell,
      null,
      identidad
    ),
    _react2.default.createElement(
      _semanticUiReact.Table.Cell,
      null,
      email
    ),
    _react2.default.createElement(
      _semanticUiReact.Table.Cell,
      null,
      direccion
    ),
    _react2.default.createElement(
      _semanticUiReact.Table.Cell,
      null,
      numeroTelefono
    )
  );
};

exports.default = UserListRow;