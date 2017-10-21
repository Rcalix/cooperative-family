'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _UserTabs = require('./UserTabs');

var _UserTabs2 = _interopRequireDefault(_UserTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = ({}) => {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_UserTabs2.default, null)
    );
};

exports.default = User;