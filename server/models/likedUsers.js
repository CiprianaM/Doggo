require("../db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likedUsersSchema = new Schema({
  likedUsersId : { type: Array, required: true}
});

const myModel = mongoose.model("LikedUsers", likedUsersSchema);

module.exports = myModel;