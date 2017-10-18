import Sequelize from 'sequelize';
import config from 'config';
console.log(config.get('enviroment'));

const sequelize = new Sequelize(config.get('database'), config.get('username'), config.get('password'), {
  host: 'ec2-23-21-88-45.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
  
module.exports = sequelize;