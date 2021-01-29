const exp = require("express");
const router = exp.Router();
const passport = require("passport");
const User = require("../models/user");


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post("/register", (req,res) =>{
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if(!err){
             passport.authenticate("local") (req, res, () => {
                res.send("");
            });
        }
        else{
            res.send(err);
        }
    })
});
router.post("/login", (req,res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user,function(err){
        if(!err){
            passport.authenticate("local")(req,res, () => {
                res.send("");
             
          
            });
        }
        else{
            res.send(err);
        }               
    });
});

module.exports = router;