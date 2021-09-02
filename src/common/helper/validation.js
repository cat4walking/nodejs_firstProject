const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required(),
        conPassword: Joi.string().min(4).required()
    });
    return schema.validate(data);
};
const loginValidation = data => {
    const schema = Joi.object({
        // name: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;