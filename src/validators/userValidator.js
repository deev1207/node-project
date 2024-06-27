const Joi = require('joi');

const createUserSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be valid',
        'any.required': 'Email is required'
    }),
    name: Joi.string().required().messages({
        'string.empty': 'Name is required'
    }),
    age: Joi.number().integer().min(0).required().messages({
        'number.base': 'Age must be a number',
        'number.min': 'Age must be a positive integer',
        'any.required': 'Age is required'
    }),
    city: Joi.string().required().messages({
        'string.empty': 'City is required'
    }),
    zipCode: Joi.string().required().messages({
        'string.empty': 'Zip code is required'
    })
});

const updateUserSchema = Joi.object({
    email: Joi.string().email().optional().messages({
        'string.email': 'Email must be valid'
    }),
    name: Joi.string().optional().messages({
        'string.empty': 'Name cannot be empty'
    }),
    age: Joi.number().integer().min(0).optional().messages({
        'number.base': 'Age must be a number',
        'number.min': 'Age must be a positive integer'
    }),
    city: Joi.string().optional().messages({
        'string.empty': 'City cannot be empty'
    }),
    zipCode: Joi.string().optional().messages({
        'string.empty': 'Zip code cannot be empty'
    })
});

module.exports = {
    createUserSchema,
    updateUserSchema
};
