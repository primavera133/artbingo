const Joi = require('joi');

const getTokenSchema = Joi.object().keys({
	email: Joi.string().email().required()
})

module.exports = { getTokenSchema }
