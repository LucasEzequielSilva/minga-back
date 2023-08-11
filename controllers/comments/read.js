let read = (req,res,next)=>res.status(200).render('index',{
    title: '/COMMENTS',
    subtitle: 'endpoints of comments'
})

export default read