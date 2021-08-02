const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rating:{
    type: Number,
    default: 0
  },
  link: {
    type: String
  }
  }, {
    timestamps: true
  })

module.exports = Post = mongoose.model('Post', PostSchema);