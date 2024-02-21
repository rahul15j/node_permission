const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.reg = async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            role: req.body.role 
        });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while registering the user');
    }
};

