const Joi = require('joi');
const { idSchema } = require('./id');

const gameIdSchema = Joi.object().keys({
	id: idSchema
})

module.exports = { gameIdSchema }
