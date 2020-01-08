require("../db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
  age: { type : Number, required: false },
  gender: { type: String, required: true },
  phoneNo: { type: String, required: false },
  location: { type: String, required: true },
  showMe: { type: Boolean, required: false }
});

const myModel = mongoose.model("User", userSchema);

module.exports = myModel;