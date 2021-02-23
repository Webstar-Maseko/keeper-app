const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");


router.post("/", (req, res)=>{
    
   
    Note.find({username: req.user.username , $or :[
        {"title":{$regex: req.body.value, $options:'i'}},{"content":{$regex: req.body.value, $options:'i'}} ] }, 
    (err, note) =>{
        err ? console.log(err) : res.send(note);
    })
});

module.exports = router;