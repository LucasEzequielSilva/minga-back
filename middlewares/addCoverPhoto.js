async function addCoverPhoto(req, res, next){
    if(req.body.pages.length > 0){
        req.body.cover_photo = req.body.pages[0]
        return next()
    }
    return res.status(400).json({
        succes: false,
        message: [{
            path: "cover_photo",
            message: "An error occurred while uploading your photo."
        }]
    })
}
export default addCoverPhoto