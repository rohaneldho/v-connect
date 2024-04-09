const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport');

router.post("/signup", async (req, res) => {
    try {
        let { firstname, lastname, username, email, password, campus } = req.body;
        
        console.log('Received signup request:', { firstname, lastname, username, email, password, campus });
        
        const newUser = new User({ firstname, lastname, username, email });
        const reguser = await User.register(newUser, password);
        
        console.log('User registered successfully:', reguser);
        
        res.send('Signup successful'); // Send a success response back to the client
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Error occurred during signup'); // Send an error response back to the client
    }
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async(req, res) => {
    res.send("Welcome");
    console.log("Hi, Welcome!!!");
});

module.exports = router;

