import Joi from "joi";

export const mangasCreate = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    cover_photo: Joi.string().uri().required(),
    description: Joi.string().min(3).required(),
    category_id: Joi.string().required(),
})
export const mangasUpdate = Joi.object({
    title: Joi.string().min(3).max(30),
    cover_photo: Joi.string().uri(),
    description: Joi.string().min(3),
    category_id: Joi.string()
})