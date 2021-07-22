const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
// const validateCommentInput = require('../../validation/comments');


//show
router.get("/:id", (req, res) => {
    console.log(req.params.id)
    Comment.findById(req.params.id)
        .then(comment => {
            console.log(comment)
            return res.json(comment)})
        .catch(err => 
            res.status(404).json({ nocommentfound: "No comment found with that id"})
        );
})

//create
router.post("/", 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        // console.log(req)
        // const {errors, isValid} = validatePostInput(req.body)

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const user = req.user.id
        const body = req.body
        // console.log(body)
        const {commentBody, username, postId} = body
        // console.log(title)
        const newComment = new Comment({user, commentBody, username, postId})

        newComment.save().then( comment => res.json(comment))
    }
)

//update
router.patch("/:id", 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        // const {errors, isValid} = validatePostInput(req.body)

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        console.log(req.body)
        const body = req.body
        const {commentBody} = body
        console.log(req.params)
        Post.findById(req.params.id).then(comment=>{
            commentBody = commentBody
            comment.save()
            res.json(comment)
        }).catch(err=>res.status(404).json({error: err}))
        // console.log(post.title)
    }
)
//delete

router.delete("/:id", (req, res)=>{
    Comment.findOneAndDelete({_id: req.params.id})
        .then(comment => res.json(comment))
        .catch(err => 
            res.status(404).json({ nocommentfound: "No Comment found with that id"}) 
        )
})

module.exports = router;