const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");
const Delete = require("../models/deleted");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'keeper-app/build/ext-images'); 
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() +  path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});
router.get("/", (req,res) =>{
    if(req.isAuthenticated()){
    Note.find({username: req.user.username}).sort({createdAt: -1}).exec((err,notes) =>{
        err ? res.send(err) : res.send(notes);
    });
    }else{
         res.send("unauthorized"); 
    }
});
//const fUpload = upload.single('image');
router.post("/",upload.single("image"), (req, res)=> {
    let note =new Note();
   
    if(req.file === undefined ){
        note =  new Note({
            title : req.body.title,
            content : req.body.content, 
            color: req.body.color,
            username: req.user.username
                       
        });
    }
    else{
        note =  new Note({
            title : req.body.title,
            content : req.body.content, 
            color: req.body.color,
            username: req.user.username,
            image: req.file.filename
        });
    }
    note.save(() => res.send("saved successfully"));

});
router.post("/delete", (req,res) =>{

    Note.findById(req.body._id, (err, note) =>{
        if(!err){
            const bin = new Delete({
                _id: note._id,
                title: note.title,
                content: note.content,
                color: note.color,
                image: note.image,
                username: note.username});
            bin.save();
        }
        
        
    });
    Note.findByIdAndDelete(req.body._id,(err, note)=>{
                err ? res.send(err) : res.send(note);
    });
});

module.exports = router; 