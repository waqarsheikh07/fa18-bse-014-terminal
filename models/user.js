var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: { type: String },
  email: String,
  password: { type: String },
  gender: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
