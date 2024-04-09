const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport')

router.post("/signup", async (req, res) => {
    let { username, email, password, confirm_password } = req.body;
    if (password === confirm_password) {
        const newUser = new User({ username, email });
        try {
            const reguser = await User.register(newUser, password);
        } catch (error) {
            console.error(error);
        }
    } else {
        res.status(400).send("Password and confirm password do not match.");
    }
});


router.post("/login",passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),async(req, res) =>{
    res.send("Welcome")
    console.log("Hi ,Welcome!!!")
})








module.exports = router;