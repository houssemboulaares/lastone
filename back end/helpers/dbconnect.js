const mongoose=require("mongoose")



const connect=()=>{
    try{
        mongoose.connect("mongodb://0.0.0.0:27017/lastlast")
        console.log('conncted')
    }
    catch(error){
        console.log('error')
    }
}
module.exports=connect