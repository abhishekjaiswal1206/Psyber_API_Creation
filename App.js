const express = require('express');
const app = express();
const sequelize = require('./models/db');
const customerRoutes = require('./routes/customerRoutes');
const corporateRoutes = require('./routes/corporateRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use(express.json());
// Define your routes
app.use('/customer', customerRoutes);
app.use('/corporate', corporateRoutes);
app.use('/admin', adminRoutes);
sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });