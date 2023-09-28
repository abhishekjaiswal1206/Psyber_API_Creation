const Sequelize = require('sequelize');
const sequelize = require('./db');
const Customer = sequelize.define('customer', {
 name: Sequelize.STRING,
 email: Sequelize.STRING,
 //body
});
module.exports = Customer;