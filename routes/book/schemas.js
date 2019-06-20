const Joi = require('joi');

const addBookSchema = Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    isbn: Joi.string(),
    release_year: Joi.string(),
});

module.exports = {addBookSchema};
