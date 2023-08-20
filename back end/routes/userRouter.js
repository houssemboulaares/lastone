const Router= require("express").Router()
const userController=require("../controllers/userController")
const isAth = require("../middleware/authMiddleware")




Router.post("/register",userController.register)
Router.post("login",userController.login)
Router.get('/me',isAth,userController.me)


module.exports=Router