const Joi = require('joi');
const { idSchema } = require('./id');

const listIdSchema = Joi.object().keys({
	id: idSchema
})

module.exports = { listIdSchema }
