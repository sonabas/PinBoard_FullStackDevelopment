const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

  image: String,

  title: String,

  description: String,

  category: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  comments: [
    {
      user: String,
      text: String
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);