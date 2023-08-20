const Router= require("express").Router()
const skinController=require('../controllers/skinController')





Router.post('/getSkin',skinController.getSkin)
Router.post('/addSkin',skinController.addSkin)


module.exports=Router