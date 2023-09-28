const Sequelize = require('sequelize');
const sequelize = require('./db');
const Booking = sequelize.define('booking', {
 customerId: Sequelize.INTEGER,
 companyId: Sequelize.INTEGER,
});
module.exports = Booking;