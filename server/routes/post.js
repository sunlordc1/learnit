const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
//Middleware
const verifyToken = require('../middlewares/auth')

//@route POST api/posts/create
//@desc Get posts
//@access Private
router.get('/',verifyToken,async (req,res)=>{
    try {
        const posts = await 
    } catch (error) {
        
    }
})

//@route POST api/posts/create
//@desc Create Post
//@access Private
router.post('/create',verifyToken,async (req,res)=>{
    const {title,description,url,status} = req.body;
    // Simple validation
    if(!title) return res.status(400).json({success:false,message:'Title is requqired'})
    try{
        const newPost = new Post({title,description,
            url:(url.startsWith('https://'))?url:`https://${url}`,
            status: status || 'TO LEARN',
            user: req.userId
        });
        await newPost.save();
        res.json({success:true,message:'Post is create',post:newPost})
    }catch(error){

    }
})

module.exports = router