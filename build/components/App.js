'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _reactRouterDom = require('react-router-dom');

var _cards = require('./cards');

var _cards2 = _interopRequireDefault(_cards);

var _User = require('./user/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      _reactRouterDom.HashRouter,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { inverted: true },
          'Cooperative'
        ),
        _react2.default.createElement(
          _semanticUiReact.Container,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _cards2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/user', component: _User2.default })
        )
      )
    );
  }
}

App.childContextTypes = {
  store: _propTypes2.default.object
};
exports.default = App;