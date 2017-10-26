
module.exports = function(sequelize, DataTypes) { 
  var Aportacion = sequelize.define('Aportacion', {
    identidad: {
      type: DataTypes.STRING,
    },
    fechaDeIngreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    idAportacion: { 
      primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false
    }
  });

  return Aportacion;
};
