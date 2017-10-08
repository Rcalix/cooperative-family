
module.exports = function(sequelize, DataTypes) { 
  var Retiros = sequelize.define('Retiros', {
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
    idRetiros: { 
      primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false
    }
  });


  Retiros.sync({force: true}).then(() => {
    // Table created
    return Retiros.create({
      identidad: '0801199324307',
      fechaDeIngreso: '1999-01-08',
      cantidad: 7560.50
    });
  });

  return Retiros;
};
  