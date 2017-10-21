'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _semanticUiReact = require('semantic-ui-react');

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _UserManage = require('./UserManage');

var _UserManage2 = _interopRequireDefault(_UserManage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserTabs extends _react2.default.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            panes: [{ menuItem: 'Nuevo Usuario', render: () => _react2.default.createElement(_UserManage2.default, null) }, { menuItem: 'Lista de Usuarios', render: () => _react2.default.createElement(_UserList2.default, null) }, { menuItem: 'Tab 3', render: () => _react2.default.createElement(
                    _semanticUiReact.Tab.Pane,
                    { attached: false },
                    'Tab 3 Content'
                ) }]

        };
    }
    render() {
        return _react2.default.createElement(_semanticUiReact.Tab, { menu: { secondary: true, pointing: true }, panes: this.state.panes });
    }
};
exports.default = UserTabs;