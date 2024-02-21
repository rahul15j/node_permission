const express=require("express") 
const router=express.Router()
const {reg} = require('../controllers/regController') 
// console.log(reg)
router.post("/registration",reg);


module.exports=router

