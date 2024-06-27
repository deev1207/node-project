var express = require('express');
var router = express.Router();
const Users = require('../controllers/userController')
const { createUserSchema, updateUserSchema } = require('../validators/userValidator');
const { validate } = require('../middlewares/validationMiddleware');
const { authenticateToken } = require('../middlewares/authMiddleware');


/* GET users listing. */

router.get('/', authenticateToken, Users.getAllUsers);
router.get('/:id', authenticateToken, Users.getUserById);
router.post('/', validate(createUserSchema), Users.createUser);
router.put('/:id', authenticateToken, validate(updateUserSchema), Users.updateUser);
router.patch('/:id', authenticateToken, validate(updateUserSchema), Users.patchUser);
router.delete('/:id', authenticateToken, Users.deleteUser);

module.exports = router;
