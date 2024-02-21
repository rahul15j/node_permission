const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, 
    email: String,
    role: { type: String, enum: ['admin', 'student', 'teacher'], default: 'student' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;