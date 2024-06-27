const User = require('../models/User');

exports.getAllUsers = async () => {
    return await User.find({});
};

exports.createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

exports.getUserById = async (id) => {
    return await User.findById(id);
}

exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

exports.patchUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, { $set: userData }, { new: true });
};