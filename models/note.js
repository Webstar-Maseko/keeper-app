const {model, Schema} = require("mongoose");

const noteSchema = new Schema({
     title: String,
     content : String,
     color: {
         type: String,
        
     },
     createdAt :{
         type :  Date,
         default: new Date()
     },
     image:String,
     username: String,
     reminder:{
         date: Date,
         label: String
     }
});


module.exports = model("Note", noteSchema);