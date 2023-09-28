const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
 dialect: 'mysql', // Change database dialect
 host: 'localhost', // Change database host
});
module.exports = sequelize;
