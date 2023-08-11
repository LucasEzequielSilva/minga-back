import Joi from 'joi';
import objectId from 'joi-objectid';
Joi.objectId = objectId(Joi);
//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
const createChapterSchema = Joi.object({
    manga_id: Joi.objectId().required(),
    title: Joi.string().required(),
    pages: Joi.array().items(Joi.string().uri()).required(),
    order: Joi.number(),
});

const updateChapterSchema = Joi.object({
    manga_id: Joi.objectId(),
    title: Joi.string().messages({ 'string.base': `"title" should be a type of 'text'`,}),
    pages: Joi.array().items(Joi.string().uri()),
    order: Joi.number().messages({ 'number': `"order" should be a type of 'number'`,}),
});

export {createChapterSchema, updateChapterSchema}