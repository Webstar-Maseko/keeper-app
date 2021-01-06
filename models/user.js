const {model, Schema} = require("mongoose");
const passLocalMon = require("passport-local-mongoose");


const userSchema =  new Schema({
    email: String,
    password: String,
    islogged: String
});
userSchema.plugin(passLocalMon);

module.exports = model("User", userSchema);