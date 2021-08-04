const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
// const validateCommentInput = require('../../validation/comments');


//show
router.get("/:id", (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => {
            return res.json(comment)})
        .catch(err => 
            res.status(404).json({ nocommentfound: "No comment found with that id"})
        );
})

//create
router.post("/", 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        // const {errors, isValid} = validatePostInput(req.body)

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const user = req.user._id
        const body = req.body
        const {commentBody, username, postId} = body
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
        const body = req.body
        const {commentBody} = body
        Comment.findById(req.params.id).then(comment=>{
            comment.commentBody = commentBody
            comment.save()
            res.json(comment)
        }).catch(err=>res.status(404).json({error: err}))
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