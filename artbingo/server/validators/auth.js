const Joi = require('joi');

const getTokenSchema = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().required()

})

module.exports = { getTokenSchema }
