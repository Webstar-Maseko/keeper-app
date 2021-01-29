const {model, Schema} = require("mongoose");

const noteSchema = new Schema({
     title: String,
     content : String,
     color: {
         type: String,
         default: 'White'
     },
     createdAt :{
         type :  Date,
         default: new Date()
     },
     username: String
});


module.exports = model("Note", noteSchema);