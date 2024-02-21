const express=require("express") 
const router=express.Router()
const {login} = require('../controllers/loginController') 
//console.log(login)
router.post("/login",login);


module.exports=router







