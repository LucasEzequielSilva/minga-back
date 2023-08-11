import Chapter from '../../models/Chapter.js' 
import { createChapterSchema } from '../../schemas/chapters.js';

//ruta para crear un capítulo
let create = async(req,res,next) => {
try {
        let newchapter = {
            manga_id: req.body.manga_id,
            title: req.body.title,
            cover_photo: req.body.cover_photo,
            pages: req.body.pages,
            order: req.body.order,
            
        }
        const chapter = new Chapter(newchapter);
        await chapter.save();
        res.status(201).json(chapter);
    
    }catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        next(err);
    }
};

export default create
  //Si la validación falla, enviamos una respuesta de error 400 con el mensaje 
  //de error de Joi. Si la validación tiene éxito, creamos un nuevo objeto de capítulo
   //utilizando los datos validados y lo guardamos en la base de datos con Mongoose.