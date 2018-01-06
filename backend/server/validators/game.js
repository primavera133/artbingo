import Joi from 'joi';

const idSchema = Joi
	.string()
	.required()
	.regex(/^[0-9a-fA-F]{24}$/);

export const gameIdSchema = Joi.object().keys({
	id: idSchema
})