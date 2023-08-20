 
var jwt= require('jsonwebtoken');
require("dotenv").config();

 const isAth=async(req,res,next)=>{
    if(!req.headers.authorization && !req.headers.authorization?.startsWith('Bearer')){
         
    return res.status(401).json({message:'unauthorized'})
    }
    
    const token=headers.authorization.split(' ')[1]

    if(!token)

    res.status(401).json({message:"token cant be null"})


    try{
      const decoded=jwt.verify(token,process.env.JWT_SECRET)

      if(!decoded)
      requestAnimationFrame.status(401).json({message:"unauthorized"})

      const user=await user.findById(decoded._id)

      if(!user)
      res.status(401).json({messgae:"unauthrized"})

      req.user={
        id:user._id,
        email:user.email
      }

      next()
    } 
    catch(e)
    {
      res.json({error:e.message})
    }
    
 } 

 module.exports=isAth