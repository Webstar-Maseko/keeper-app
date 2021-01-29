const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");
const Deleted = require("../models/deleted");

router.get("/", (req,res) =>{
    if(req.isAuthenticated()){
    Note.find({username: req.user.username}).sort({createdAt: -1}).exec((err,notes) =>{
        err ? res.send(err) : res.send(notes);
    });
    }else{
         res.send("unauthorized"); 
    }
});

router.post("/", (req, res)=> {
    const note =  new Note({
        title : req.body.title,
        content : req.body.content, 
        username: req.user.username 
    });
    note.save(() => res.send("saved successfully"));

});
router.post("/delete", (req,res) =>{

    Note.findById(req.body._id, (err, note) =>{
        if(!err){
            const bin = new Deleted({
                _id: note._id,
                title: note.title,
                content: note.content,
                color: note.color,
                username: note.username});
            bin.save();
        }
        
        
    });
    Note.findByIdAndDelete(req.body._id,(err, notes)=>{
                err ? res.send(err) : res.send(notes);
    });
});

module.exports = router;