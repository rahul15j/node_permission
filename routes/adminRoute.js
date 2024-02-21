const express = require('express');
const router = express.Router();

const {authenticateToken,authorize} = require('../middleware/auth');
const {getUsers} = require('../controllers/adminController')



router.get('/users',authenticateToken,authorize('admin'),getUsers);

module.exports = router