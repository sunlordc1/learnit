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
        const posts = await Post.find({user:req.userId})
        .populate('user',['username'])
        res.json({success:true,posts})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message:'Internal server error'})
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
        console.log(error.message);
        res.status(500).json({success:false,message:'Internal server error'})
    }
})

//@route PUT api/posts/:id
//@desc Update posts
//@access Private
router.put('/:id',verifyToken,async (req,res)=>{
    const {title,description,url,status} = req.body;
    // Simple validation
    if(!title) return res.status(400).json({success:false,message:'Title is requqired'})
    try{
        let updatedPost = {
            title,
            description: description || '',
            url:((url.startsWith('https://'))?url:`https://${url}`) || '',
            status: status || 'TO LEARN',
        }
        const postUpdateCondition = {_id:req.params.id,user:req.userId}
        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new:true})
        //User not authorization to update post
        if(!updatedPost) return res.status(401).json({success:false,message:'Post not found or user not authorization'})
        res.json({success:true,message:'Post is updated',post:updatedPost})
    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false,message:'Internal server error'})
    }
})

//@route DELETE api/posts/:id
//@desc Delete posts
//@access Private
router.delete('/:id',verifyToken,async (req,res)=>{
 try {
     const postDeleteCondition = {_id:req.params.id,user:req.userId}
     const deletePost = await Post.findOneAndDelete(postDeleteCondition)
    //User not authorization to update post
    if(!deletePost) return res.status(401).json({success:false,message:'Post not found or user not authorization'})
    res.json({success:true,message:'Post is deleted',post:deletePost})
 } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false,message:'Internal server error'})
 }
})

module.exports = router