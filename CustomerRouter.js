const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
router.post('/signup', customerController.signup);
router.post('/login', customerController.login);
router.put('/edit-profile', customerController.editProfile);
router.get('/dashboard', customerController.dashboard);
router.get('/my-bookings', customerController.myBookings);
router.get('/sign-out', customerController.signOut);
module.exports = router;
