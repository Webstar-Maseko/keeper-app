const exp = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bp = require("body-parser");
const path = require('path');
const cors = require("cors");
const port = 5000 || process.env.PORT;
const moncon = "mongodb://localhost:27017/keeperDb" || process.env.mongo
require("dotenv").config();

 

const BinController = require("./controllers/BinController");
const NoteController = require("./controllers/NoteController");
const UserController = require("./controllers/UserController");
const ReminderController = require("./controllers/ReminderController");
const SearchController = require("./controllers/SearchController");

const app = exp();  
mongoose.set("useCreateIndex", true);

app.use(exp.static(path.resolve(__dirname,"./keeper-app/build")));
app.use(session({secret:process.env.secret, resave:  false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
//app.use(cors({credentials: true, origin:"http://localhost:3000"}));

   
   
app.use("/api/user", UserController);
app.use("/api/note", NoteController);
app.use("/api/bin", BinController);
app.use("/api/reminder", ReminderController);
app.use("/api/search", SearchController)

app.get('*', (req,res) =>{
   res.sendFile(path.resolve(__dirname, "./keeper-app/build",'index.html'));   
});
 
        

mongoose.connect(process.env.mongo, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}) 
    .then(() => { 
        console.log("connected to mongo"); 
        app.listen(process.env.PORT, () => console.log(`Server running on ${port}`));
    }).catch(err => console.log(err));
    