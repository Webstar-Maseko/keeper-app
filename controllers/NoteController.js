const exp = require("express");
const router = exp.Router();
const Note = require("../models/note");
const Delete = require("../models/deleted");
const multer = require("multer");
const path = require("path");
const cloudinary = require("../config/cloudinary");


const storage = multer.diskStorage({
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

router.post("/",upload.single("image"), (req, res)=> {
    let note =new Note();
   
    if(req.file === undefined ){
        note =  new Note({
            title : req.body.title,
            content : req.body.content, 
            color: req.body.color,
            username: req.user.username
                       
        });
        note.save(() => res.send("saved successfully"));
    }
    else{
        cloudinary.uploader.upload(req.file.path, (error, result) =>{
            if(!error){
                note =  new Note({
                    title : req.body.title,
                    content : req.body.content, 
                    color: req.body.color,
                    username: req.user.username,
                    image: result.secure_url
                });
                note.save(() => res.send("saved successfully"));
            }else{
                console.log(error);
            }

        });
       
       
    }
   

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