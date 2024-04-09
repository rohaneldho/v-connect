const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("./models/user.js");
const passport = require('passport');
const session = require('express-session')
const LocalStrategy=require('passport-local')

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3400;

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/vithub');
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
main();

// Middleware
// Middleware
app.use(express.json());

app.post('/signup', async(req, res) => {
  try {
    let { firstname, lastname, username, email, password, campus1 } = req.body;
    
    console.log('Received signup request:', { firstname, lastname, username, email, password, campus1 });
    
    // Validate that campus1 is provided
    if (!campus1) {
      throw new Error('Campus is required');
    }
    
    const newUser = new User({ firstname, lastname, username, email, campus1 });
    const reguser = await User.register(newUser, password);
    
    console.log('User registered successfully:', reguser);
    
    res.send('Signup successful'); // Send a success response back to the client
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).send('Error occurred during signup'); // Send an error response back to the client
  }
});


// Serve static files from the frontend build directory
const frontendDistPath = path.join(__dirname, '..', 'FRONTEND', 'dist');
app.use(express.static(frontendDistPath));

// Route all other requests to the frontend index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
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

app.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async(req, res) => {
    // Send a response to the frontend upon successful authentication
    res.json({ status: "success", message: "Welcome" });
    console.log("Hi, Welcome!!!");
});