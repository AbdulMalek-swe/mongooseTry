exports.errorHandler=async(err,req,res,next)=>{
     res.status(400).json(err)
}