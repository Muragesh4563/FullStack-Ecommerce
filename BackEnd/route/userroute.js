const express=require('express')
const router=express.Router()
const {registeruser, login, getusers, getuserbyemail, updateuser,deleteuser}=require('../controller/usercontroller');
const { createproduct } = require('../controller/productcontroller');

router.post('/register',registeruser);
router.post('/login',login);
router.get('/getusers',getusers);
router.get('/getuserbyemail/:email',getuserbyemail);
router.put('/updateuser/:id',updateuser);
router.delete('/deleteuser/:id',deleteuser);
router.post('/createproduct/:userid',createproduct)

module.exports=router