const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: String,

  email: String,

  password: String,

  avatar: {
    type: String,
    default: ""
  },

  savedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]

});

module.exports = mongoose.model("User", userSchema);