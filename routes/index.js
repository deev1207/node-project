var express = require('express');
var router = express.Router();
const Users = require('../controllers/userController')

/* GET home page. */
router.post('/login',  Users.login);

module.exports = router;
