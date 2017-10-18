'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_config2.default.get('enviroment'));

const sequelize = new _sequelize2.default(_config2.default.get('database'), _config2.default.get('username'), _config2.default.get('password'), {
  host: 'ec2-23-21-88-45.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

module.exports = sequelize;