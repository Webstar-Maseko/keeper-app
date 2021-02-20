const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");
const Delete = require("../models/deleted");

router.get("/", (req, res)=>{
    Note.find({username: req.user.username, reminder:{$ne:undefined || null} }, (err,note) => {
        err ? res.send(err): res.send(note);
    })

})
router.post("/", (req, res)=>{
    Note.findByIdAndUpdate(req.body._id, {"reminder.date": req.body.date, "reminder.label": req.body.label}, (err, doc)=> err ? console.log(err): res.send("reminder set"));
});

router.post("/delete", (req,res) =>{
    Note.findByIdAndUpdate(req.body._id, {$unset:{"reminder": 1}}, (err, doc)=>{
        if(err){
            console.log(err);

        }else{
         Note.find({username: req.user.username, reminder:{$ne:undefined || null} }, (err,note) => 
            err ? res.send(err): res.send(note)
        )}
        })
})

module.exports = router; 