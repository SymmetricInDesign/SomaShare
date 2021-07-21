const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

//index
router.get("/", (req,res)=> {
    const {category, searchText} = req.query
    if (category == "All" && searchText=="-1"){
        Post.find()
        .sort({ date: -1 })
        .then( posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No Posts Found'}))
    }else if (category == "All" && searchText != "-1"){
        Post.find().where(`title LIKE '%${searchText}%' OR description LIKE '%${searchText}%'`)
        .sort({ date: -1 })
        .then( posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No Posts Found'}))
    }else if (category != "All" && searchText == "-1"){
        Post.find().where(`category LIKE '%${category}%'`)
        .sort({ date: -1 })
        .then( posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No Posts Found'}))
    }else{
        Post.find().where(`category LIKE '%${category}%' AND (title LIKE '%${searchText}%' OR description LIKE '%${searchText}%')`)
        .sort({ date: -1 })
        .then( posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No Posts Found'}))
    }
    
})
//show
router.get("/:id", (req, res) => {
    console.log(req.params.id)
    Post.findById(req.params.id)
        .then(post => {
            console.log(post)
            return res.json(post)})
        .catch(err => 
            res.status(404).json({ nopostfound: "No post found with that id"})
        );
})

//create
router.post("/", 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        // console.log(req)
        const {errors, isValid} = validatePostInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors);
        }
        const user = req.user.id
        const body = req.body
        // console.log(body)
        const {title, category, description, link, username} = body
        // console.log(title)
        const newPost = new Post({user, title, category, description, link, username})

        newPost.save().then( post => res.json(post))
    }
)

//update
router.patch("/:id", 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        const {errors, isValid} = validatePostInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors);
        }
        console.log(req.body)
        const body = req.body
        const {title, category, description, link} = body
        console.log(req.params)
        Post.findById(req.params.id).then(post=>{
            post.title = title
            post.category = category
            post.description = description
            post.link = link
    
            post.save()
            res.json(post)
        }).catch(err=>res.status(404).json({error: err}))
        // console.log(post.title)
    }
)
//delete

router.delete("/:id", (req, res)=>{
    Post.findOneAndDelete({_id: req.params.id})
        .then(post => res.json(post))
        .catch(err => 
            res.status(404).json({ nopostfound: "No post found with that id"}) 
        )
})

module.exports = router;