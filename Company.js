const Sequelize = require('sequelize');
const sequelize = require('./db');
const Company = sequelize.define('company', {
 name: Sequelize.STRING,
 email: Sequelize.STRING,
 gst: Sequelize.STRING,
});
module.exports = Company;