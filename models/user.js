const {model, Schema} = require("mongoose");
const passLocalMon = require("passport-local-mongoose");


const userSchema =  new Schema({
   username: String,
    password: String
    
});
userSchema.plugin(passLocalMon);

module.exports = model("User", userSchema);