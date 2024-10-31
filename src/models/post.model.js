const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: [{
    type: mongoose.Schema.Types.ObjectId,    // data type provided by mongoose  which is an ODM (Object Data Modeling) library for MongoDB and Node.js. 
                                             // It represents a unique identifier for each document in a MongoDB collection.
    ref: 'User', // Reference to User who liked the post
  }],

},{ timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;