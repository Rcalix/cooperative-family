
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

 
  Aportacion.sync({force: true}).then(() => {
    // Table created
    return Aportacion.create({
      identidad: '0801199324307',
      fechaDeIngreso: '1999-01-08',
      cantidad: 7560.50
    });
  });

  return Aportacion;
};
