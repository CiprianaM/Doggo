require("../db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dislikedUsersSchema = new Schema({
  dislikedUsersId : { type: Array, required: true}
});

const myModel = mongoose.model("DislikedUsers", dislikedUsersSchema);

module.exports = myModel;