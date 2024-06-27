const userDAO = require('../dao/userDAO');

exports.getAllUsers = async () => {
    return await userDAO.getAllUsers();
};

exports.createUser = async (userData) => {
    return await userDAO.createUser(userData);
};

exports.getUserById = async (id) => {
    return await userDAO.getUserById(id);
};

exports.updateUser = async (id, userData) => {
    return await userDAO.updateUser(id, userData);
};

exports.patchUser = async (id, userData) => {
    return await userDAO.patchUser(id, userData);
};
exports.deleteUser = async (id) => {
    return await userDAO.deleteUser(id);
};
