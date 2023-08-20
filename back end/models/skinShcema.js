const mongoose=require("mongoose")




const skinShcema=mongoose.Schema({
    nameChamipon:{type:String},
    skins :[
        {name:String,imgLink:String,price:Number}
     ]
})
const Skin= mongoose.model('Skin',skinShcema)


module.exports=Skin