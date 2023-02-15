import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().min(1),
    password: Joi.string().min(1)
});

export {
    userValidator
}