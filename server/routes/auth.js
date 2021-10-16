const express =  require('express')
const router = express.Router();
const User = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

//@route POST api/auth/register
//@desc Register user
//@access Public
router.post('/register',async(req,res)=>{
    const {username,password} = req.body
    //Simple validation
    if(!username || !password)
    return res.staus(400).json({success:false,message:'Missing username and/or password'})
    try{
        //Check for existing user
        const user = await User.findOne({username})
        if(user) return res.json({success:false,message:'Username already'})
        //All goood
        const hashsedPassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password:hashsedPassword
        })
        await newUser.save()

        //return Access Token
        const accessToken = jwt.sign({userId:newUser._id},process.env.ACCESS_TOKEN_SECRET)
        res.json({success:true,message:'User created successfuly',accessToken})
        }catch(error){
            console.log(error.message)
            res.status(500).json({success:false,message:'Internal server error'})
        }
})
//@route POST api/auth/login
//@desc Login user
//@access Public
router.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password) return res.staus(400).json({success:false,message:'Incorrect username and/or password'})
    try {
        // Check for existing user
        const user = await User.findOne({username})
        if(!user) return res.json({success:false,message:'Incorrect username and/or password'})
        // Valid password use argon2 verify
        const passwordValid = await argon2.verify(user.password, password);
        if(!passwordValid) return res.json({success:false,message:'Incorrect username and/or password'})
        // All good validation then return Access Token
        const accessToken = jwt.sign({userId:user._id},process.env.ACCESS_TOKEN_SECRET)
        res.json({success:true,message:'Login Success',accessToken})      
    } catch (error) {
        
    }
})

// router.get('/',(req,res)=>res.send('User route'))
module.exports  = router