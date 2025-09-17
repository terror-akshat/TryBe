const mongoose = require("mongoose");
const { VideoPost } = require("./databaseSchema.js");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoPost",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);