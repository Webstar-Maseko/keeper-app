const {model, Schema} = require("mongoose");

const noteSchema = new Schema({
     title: String,
     body : String,
     email : String,
     createdAt :{
         type :  Date,
         default: Date.now
     },
     user:{
         type: Schema.Types.ObjectId,
         ref: "users"
     }
});


module.exports = model("Note", noteSchema);