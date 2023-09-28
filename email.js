const mongoose = require('mongoose');
const verificationSchema = new mongoose.Schema({
 userId: String,
 token: String,
 createdAt: { type: Date, default: Date.now, expires: '1d' },
});
const Verification = mongoose.model('Verification', verificationSchema);
module.exports = Verification;