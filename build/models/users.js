'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    identidad: {
      type: DataTypes.STRING,
      primaryKey: true

    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT
    },
    numeroTelefono: {
      type: DataTypes.STRING
    },
    direccion: {
      type: DataTypes.TEXT
    },
    incrementMe: {
      type: DataTypes.INTEGER, autoIncrement: true
    },
    myDate: {
      type: DataTypes.DATE, defaultValue: DataTypes.NOW
    }
  });

  // User.sync({force: true}).then(() => {
  //   // Table created
  //   return User.bulkCreate([{
  //     identidad: '0801199324307',
  //     fullName: 'Ramon Antonio Calix Baquedano',
  //     email: 'ramoncalixb@gmail.com',
  //     numeroTelefono: 31748295,
  //     direccion: 'Brisas del cortijo bloque B'
  //   },{
  //     identidad: '1801199324307',
  //     fullName: '1Ramon Antonio Calix Baquedano',
  //     email: '1ramoncalixb@gmail.com',
  //     numeroTelefono: 131748295,
  //     direccion: '1Brisas del cortijo bloque B'
  //   },{
  //     identidad: '21801199324307',
  //     fullName: '21Ramon Antonio Calix Baquedano',
  //     email: '21ramoncalixb@gmail.com',
  //     numeroTelefono: 2131748295,
  //     direccion: '21Brisas del cortijo bloque B'
  //   }]);
  // });

  return User;
};