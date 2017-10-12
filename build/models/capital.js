'use strict';

module.exports = function (sequelize, DataTypes) {
  var Capital = sequelize.define('Capital', {
    saldo: {
      type: DataTypes.FLOAT
    },
    idCapital: {
      primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false
    }
  });

  Capital.sync({ force: true }).then(() => {
    // Table created
    return Capital.create({
      saldo: 50
    });
  });

  return Capital;
};