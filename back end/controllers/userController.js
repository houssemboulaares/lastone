const mongoose=require('mongoose')
const User=require('../models/userShcema')
const {findOne}=require('../models/userShcema')
const { json } = require('express')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config()


const userController={
    register:async(req,res)=>{

        const {email,password,passwordconfirme}=req.body
        const salt= bcrypt.genSaltSync(10)


        const hash =bcrypt.hashSync(password,salt);

        if(!email||!password||!passwordconfirme)
        return res.status(400).json({message:'missed information'})

        const user=await User.findOne({email:email})

        if(user)
        return res.status(400).json({message:'user already creared'})

        if(password.localeCompare(passwordconfirme)!=0)
        return res.status(400).json({message:'password not confirmed'})


        const newuser=await User.create({email:email,password:hash})


        if(!newuser)
        return res.status(400).json({message:'user not created'})

        return res.status(200).json({_id:newuser.email,token:genToken(newuser._id)})

    },
    



    login:async(req,res)=>{
        
        const {email,password}=req.body
                if(!email||!password)
           return res.status(400).json({message:"missed information"})


           const user=await User.findOne({email})
           if (!user){
            return res.status(400).json({message:'user not found'})
           }


            const isMatch=await bcrypt.compare(password,user.password)
             if(!isMatch){
              return res.status(400).json({message:'invalid password'})
             }


              res.status(200).json({
                "_id":user._id,
                "email":user.email,
                token:genToken(user._id)
              })
    },    
    
    me:async(req,res)=>{
        res.status(200).json(req.user)
    },

}
const genToken =(id)=>{
    return  jwt.sign({_id:id},"12345",{expiresIn:'10d'})
}
module.exports=userController