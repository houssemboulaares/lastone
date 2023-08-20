
const Skin = require('../models/skinShcema')



const skinController={
    getSkin:async(req,res)=>{
        console.log(req.body)
        
        const skin=await Skin.findOne({nameChamipon:req.body.nameChamipon})
        res.send(skin)

},
addSkin:async(req,res)=>{
    const skin=await Skin.create(req.body)

    if(skin)
    res.status(400).json({message:'skin added '})

}

}

module.exports=skinController