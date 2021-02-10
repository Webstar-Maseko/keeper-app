const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");
const Deleted = require("../models/deleted");


router.get("/", (req,res) =>{
    if(req.isAuthenticated()){
        Deleted.find({username: req.user.username}, (err, notes) => {
            err ? res.send(err) : res.send(notes);
        });
    }else{
        res.send("unauthorized"); 
   }
});
router.post("/delete", (req,res)=>{
    Deleted.findByIdAndDelete(req.body._id,(err, notes) =>{
        err ? res.send(err): res.send(notes); 
    });

});

router.post("/restore", (req,res)=>{
    Deleted.findById(req.body._id, (err, note) => {
        if(!err){ 
            const resNote = new Note({
                _id: note._id,
                title: note.title,
                content: note.content,
                color: note.color,
                image: note.image,
                username: note.username
            });
            resNote.save();
        }
    });
    Deleted.findByIdAndDelete(req.body._id, (err,notes) =>{
        err ? res.send(err) :  res.send(notes);
    });
});

module.exports = router;
