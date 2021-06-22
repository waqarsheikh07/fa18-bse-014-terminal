var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  password: { type: String, required: true },
  gender: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
