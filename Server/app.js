const express=require('express');
const app=express();
const path = require('path');
const passport= require('passport')
const LocalStrategy=require('passport-local')
const User=require("./models/user.js")
const session = require('express-session')
app.listen(4000,()=>{
    console.log("port 4000");
    
});

const mongoose = require('mongoose');
main().
    then(()=>{
        console.log("Database Connected Successfully");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/vithub');
}
const sessionOptions={
    secret: 'mystring',
    resave: false,
    saveUninitialized: true
};
const flash = require('connect-flash');
app.use(session(sessionOptions));
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const userRouter=require("./routes/user.js");
app.use("/",userRouter);
const frontendDistPath = path.join(__dirname, '..', 'FRONTEND', 'dist');
app.use(express.static(frontendDistPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
});