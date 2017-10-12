'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
// var lodash = require('lodash');
var sequelize = require('../sequelize');
var db = {};

fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== "index.js";
}).forEach(function (file) {
  console.log(file);
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User.belongsToMany(db.Aportacion, { as: 'identidad_aportacion_pk', through: 'identidad' });
db.User.belongsToMany(db.Retiros, { as: 'identidad_retiro_pk', through: 'identidad' });
module.exports = db;