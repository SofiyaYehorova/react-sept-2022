import Joi from 'joi';

const registerValidator = Joi.object({
    username:Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).min(1).max(20),
    password:Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).min(1).max(128)
});

export {registerValidator}