import joi from "joi";


export const authorCreate = joi.object({
    name: joi.string().required()
    .min(4)
    .max(30)
    .messages({
        'any.required': 'Is name required',
        'string.empty': 'Is name required',
        'string.min': 'The name is too short',
        'string.max': 'The name can only contain 30 letters'
    }),
    lastname: joi.string()
    .min(4)
    .max(30)
    .required()
    .messages({
        'string.min': 'The lastname is too short',
        'string.max': 'The lastname can only contain 30 letters'
}),

    date: joi.date()
    .optional(),

    city: joi.string().required(),

    country: joi.string().required(),

    photo: joi.string().required()
    .uri()
    .messages({
        'any.required': 'IMG_REQUIRED',
        'string.empty': 'IMG_REQUIRED',
        'string.uri': 'INVALID_URL',
    }),
})
