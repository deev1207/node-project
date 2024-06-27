exports.createUserDTO = (data) => ({
    name: data.name,
    email: data.email,
    age: data.age,
    city: data.city,
    zipCode: data.zipCode,
    // Add any other fields as needed
});

exports.userResponseDTO = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    age: user.age,
    city: user.city,
    zipCode: user.zipCode,
    // Add any other fields as needed
});
