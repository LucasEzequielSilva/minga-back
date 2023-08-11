import createHttpError from "http-errors";

const errorHandler = (error,req,res,next)=>{
    console.log(error.stack)

    return res
    .status(error.status || 500)
    .json({
        statusCode: error.status,
        message: error.message
    })
}
export default errorHandler