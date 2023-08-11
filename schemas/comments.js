import Joi from "joi";

export const commentsCreate = Joi.object({
    chapter_id: Joi.string()
    .required(),
    content: Joi.string()
    .required()
})

export const commentsUpdate = Joi.object({
    chapter_id: Joi.string(),
    content: Joi.string()
})