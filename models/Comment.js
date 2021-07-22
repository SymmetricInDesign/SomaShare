const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  postId:{
      type: Schema.Types.ObjectId,
      ref: "posts"
  },
  username: {
    type: String,
  },
  commentBody: {
    type: String
  },
  }, {
    timestamps: true
  })

module.exports = Comment = mongoose.model('Comment', CommentSchema);