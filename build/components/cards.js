'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Cards extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      _semanticUiReact.Card,
      null,
      _react2.default.createElement(
        _semanticUiReact.Card.Content,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/user' },
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', color: 'blue', size: 'huge' }),
          'Usuarios',
          _react2.default.createElement(_semanticUiReact.Card.Header, null)
        )
      ),
      _react2.default.createElement(
        _semanticUiReact.Card.Content,
        { extra: true },
        'Crear, Editar usuarios'
      )
    );
  }
}

exports.default = Cards;