const mongoose=require("mongoose")



const userShecema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true,unique:true},
    imgLink:{type:String}

})
const User=mongoose.model("user",userShecema)
module.exports=User

/*

 nameChamipon:string
 skins :[
    {name:string,imgLink:string,price:number}
 ]


 getSkin  :(req,res)   
Skin.find(name:req.body.name)


*/