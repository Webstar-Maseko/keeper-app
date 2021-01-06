const exp = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const User = require("./models/user");
const Note = require("./models/note");


const app = exp();
mongoose.connect("mongodb://localhost:27017/keeperDb", {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.set("useCreateIndex", true);

app.use(session({secret:"fISRT TIME TRYINg Authentication. remember to use environmental var", resave:  false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res) =>{

    res.send("react server is up");
});

app.post("/register", (req,res) =>{

    User.register({username: req.body.email,islogged: false}, req.body.password, (err, user) => {
        if(!err){
            passport.authenticate("local") (req, res, () => {
                user.updateOne({islogged}, {islogged: true});
                    //Do something
            });
        }
        else{
            user.updateOne({islogged}, {islogged: true}, ())
        }
    })
});

app.post("/note", (req, res)=> {
    const note =  new Note({
        title : req.body.title,
        body : req.body.body,
        user: ...
    });

});


app.listen(3000, () => console.log("listening on 3000"));