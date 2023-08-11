import Joi from "joi";

export const companiesCreate = Joi.object({
    name: Joi.string().required()
    .min(4)
    .max(10)
    .messages({
        'any.required': ' Is name required',
        'string.empty': ' Is name required',
        'string.min': ' The name is too short',
        'string.max': 'The namme can only contain 10 letters'
    }),
    logo: Joi.string().required()
    .uri()
    .messages({
        'any.required': 'LOGO_REQUIRED',
        'string.empty': 'LOGO_REQUIRED',
        'string.uri': 'INVALID_URL',
    }),
    website: Joi.string().required()
    .uri()
    .messages({
        'any.required': 'WEBSITE_REQUIRED',
        'string.empty': 'WEBSITE_REQUIRED',
        'string.uri': 'INVALID_URL',
    }),
    description: Joi.string().required(),
})

