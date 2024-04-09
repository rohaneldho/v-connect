const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport')

router.post("/signup", async (req, res) => {
    let { fisrstname,lastname,username, email, password } = req.body;
    
        const newUser = new User({ fisrstname,lastname,username, email });
        try {
            const reguser = await User.register(newUser, password);
        } catch (error) {
            console.error(error);
        }
    
});


router.post("/login",passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),async(req, res) =>{
    res.send("Welcome")
    console.log("Hi ,Welcome!!!")
})








module.exports = router;