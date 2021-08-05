const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user._id,
      username: req.user.username,
      likedPostIds: req.user.likedPostIds,
      dislikedPostIds: req.user.dislikedPostIds,
    });
  })


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get("/:user_id/posts", (req, res) => {
    Post.find({user: req.params.user_id})
      .sort({date: -1})
      .then(posts => res.json(posts))
      .catch(err => 
          res.status(404).json({nopostsfound: "No posts found from this user."})
        )
})

router.get("/:user_id/comments", (req, res) => {
  Comment.find({user: req.params.user_id})
    .sort({date: 1})
    .then(comments => res.json(comments))
    .catch(err => 
        res.status(404).json({nocommentsfound: "No comments found from this user."})
      )
})

router.get("/:user_id", (req, res) => {
  User.findById(req.params.user_id)
  .then(user => res.json(user))
  .catch(err => 
    res.status(404).json({nouserfound: "No user found with that id"})  
  )
})

router.patch("/:id",
  // passport.authenticate('jwt', { session: false}),
  (req, res) =>{
    const body = req.body
    const {postId, modifier} = body
    User.findById(req.params.id).then(user=>{
      if (modifier === 1){
        let indexToRemove = user.dislikedPostIds.indexOf(postId)
        if (indexToRemove > -1) {
          user.dislikedPostIds.splice(indexToRemove, 1);
        }
        user.likedPostIds.push(postId)
      }else if (modifier===-1){
        let indexToRemove = user.likedPostIds.indexOf(postId)
        if (indexToRemove > -1) {
          user.likedPostIds.splice(indexToRemove, 1);
        }
        user.dislikedPostIds.push(postId)
      }else{
        let indexToRemove = user.likedPostIds.indexOf(postId)
        if (indexToRemove > -1) {
          user.likedPostIds.splice(indexToRemove, 1);
        }else{
          indexToRemove = user.dislikedPostIds.indexOf(postId)
          if (indexToRemove>-1){
            user.dislikedPostIds.splice(indexToRemove, 1)
          }
        }
      }
      // user.dislikedPostIds = []
      // user.likedPostIds = []
      user.save()
      res.json(user)
    }).catch(err=>res.status(404).json({error: err}))
})

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        errors.username = "User already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { _id: user._id, username: user.username, likedPostIds: user.likedPostIds, dislikedPostIds: user.dislikedPostIds };
                
  
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const username = req.body.username;
    const password = req.body.password;
  
    User.findOne({ username }).then(user => {
      if (!user) {
        errors.username = "This user does not exist";
        return res.status(400).json(errors);
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { _id: user._id, username: user.username, likedPostIds: user.likedPostIds, dislikedPostIds: user.dislikedPostIds };
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
    });
  });

module.exports = router;