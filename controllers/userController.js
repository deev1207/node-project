const userService = require('../services/userService');
const { createUserDTO, userResponseDTO } = require('../dtos/userDTO');
const { authenticate } = require('../auth/auth');


const userController = {
    login: async (req, res) => {
        try {
            const authResult = await authenticate(req.body.name);
            if (!authResult) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            res.json({ token: authResult.token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.json(users.map(user => userResponseDTO(user)));
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.id);
            if (user) {
                res.json(userResponseDTO(user));
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const userDTO = createUserDTO(req.body);
            const newUser = await userService.createUser(userDTO);
            const authResult = await authenticate(req.body.name);
            if (!authResult) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            res.json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userDTO = createUserDTO(req.body);
            const updatedUser = await userService.updateUser(req.params.id, userDTO);
            if (updatedUser) {
                res.json(userResponseDTO(updatedUser));
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await userService.deleteUser(req.params.id);
            if (deletedUser) {
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    patchUser: async (req, res) => {
        try {
            const updatedUser = await userService.patchUser(req.params.id, req.body);
            if (updatedUser) {
                res.json(userResponseDTO(updatedUser));
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;
