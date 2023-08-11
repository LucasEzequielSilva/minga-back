import createHttpError from "http-errors";

const notFound = (req,res,next)=>{
    next(createHttpError(404, "the route does not exist"))

}
export default notFound