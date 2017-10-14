'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserForm = ({ onSave, onChange, onErrors }) => {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _semanticUiReact.Form,
      null,
      _react2.default.createElement(_semanticUiReact.Form.Field, { label: 'Identidad',
        placeholder: 'Identidad',
        name: 'identidad',
        control: 'input',
        onChange: onChange }),
      _react2.default.createElement(_semanticUiReact.Form.Field, { label: 'Nombre',
        placeholder: 'Nombre',
        name: 'nombre',
        control: 'input',
        onChange: onChange }),
      _react2.default.createElement(_semanticUiReact.Form.Field, {
        label: 'Email',
        placeholder: 'Email',
        name: 'email',
        control: 'input',
        onChange: onChange }),
      _react2.default.createElement(_semanticUiReact.Form.Field, {
        label: 'Numero de Telefono',
        placeholder: 'Numero de Telefono',
        name: 'telefono',
        control: 'input',
        onChange: onChange }),
      _react2.default.createElement(_semanticUiReact.Form.Field, {
        label: 'Direccion',
        placeholder: 'Direccion',
        name: 'direccion',
        control: 'input',
        onChange: onChange }),
      _react2.default.createElement(
        _semanticUiReact.Form.Group,
        { widths: 'equal' },
        _react2.default.createElement(
          _semanticUiReact.Button,
          { negative: true, fluid: true },
          'Cancelar'
        ),
        _react2.default.createElement(
          _semanticUiReact.Button,
          { positive: true, fluid: true, type: 'submit', onClick: onSave },
          'Guardar'
        )
      )
    ),
    onErrors.length > 0 && _react2.default.createElement(_semanticUiReact.Message, {
      error: true,
      header: 'Parece que hay un error en el formulario',
      list: onErrors
    })
  );
};

exports.default = UserForm;