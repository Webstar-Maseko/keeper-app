const exp = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bp = require("body-parser")
const cors = require("cors");
const port = 5000 || PROCESS.ENV.PORT;



const BinController = require("./controllers/BinController");
const NoteController = require("./controllers/NoteController");
const UserController = require("./controllers/UserController");
const ReminderController = require("./controllers/ReminderController");

const app = exp();

mongoose.set("useCreateIndex", true);


app.use(session({secret:"fISRT TIME TRYINg Authentication. remember to use environmental var", resave:  false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(cors({credentials: true, origin:"http://localhost:3000"}));



app.use("/api/user", UserController);
app.use("/api/note", NoteController);
app.use("/api/bin", BinController);
app.use("/api/reminder", ReminderController);

     

mongoose.connect("mongodb://localhost:27017/keeperDb", {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
    .then(() => { 
        console.log("connected to mongo"); 
        app.listen(port, () => console.log(`Server running on ${port}`));
    }).catch(err => console.log(err));
    