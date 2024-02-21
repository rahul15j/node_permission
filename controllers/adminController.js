const User = require('../models/userModel');


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching users');
    }
};


    