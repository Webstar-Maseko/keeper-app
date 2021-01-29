const exp = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bp = require("body-parser")
const cors = require("cors");



const BinController = require("./controllers/BinController");
const NoteController = require("./controllers/NoteController");
const UserController = require("./controllers/UserController");


const app = exp();

mongoose.set("useCreateIndex", true);


app.use(session({secret:"fISRT TIME TRYINg Authentication. remember to use environmental var", resave:  false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(cors({credentials: true, origin:"http://localhost:3000"}));



app.use("/user", UserController);
app.use("/note", NoteController);
app.use("/bin", BinController);

 

mongoose.connect("mongodb://localhost:27017/keeperDb", {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => { 
        console.log("connected to mongo"); 
        app.listen(5000, () => console.log(`Server running on 5000`));
    }).catch(err => console.log(err));
 