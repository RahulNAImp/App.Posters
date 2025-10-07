const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

// Routes
// router.get('/', getAllUsers);

router.route("/").get(UserController.getAllUsers);

module.exports = router;