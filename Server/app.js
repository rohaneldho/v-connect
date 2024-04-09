const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("./models/user.js");
const Project = require("./models/project.js");
const Club= require("./models/club.js");
const passport = require('passport');
const session = require('express-session')
const LocalStrategy=require('passport-local')
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
const multer = require('multer');
const server = http.createServer(app);
const PORT = process.env.PORT || 34030;

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
app.get('/listings', async (req, res) => {
    try {
      // Fetch project data from MongoDB
      console.log("Getting project data");
      const projects = await Project.find();
      // Send the project data as JSON response
      res.json(projects);
    } catch (error) {
      console.error('Error fetching project data:', error);
      res.status(500).json({ error: 'Error fetching project data' });
    }
  });
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
app.post('/makeproj', async (req, res) => {
    try {
      let { name, desc, num, type } = req.body;
      
      console.log('Received project creation request:', { name, desc, num, type });
      
      // Validate that name and desc are provided
      if (!name || !desc) {
        throw new Error('Project name and description are required');
      }
      
      const newProject = new Project({ name, desc, num, type });
      const savedProject = await newProject.save();
      
      console.log('Project created successfully:', savedProject);
      
      res.send('Project creation successful'); // Send a success response back to the client
    } catch (error) {
      console.error('Project creation error:', error);
      res.status(500).send('Error occurred during project creation'); // Send an error response back to the client
    }
  });
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limit to 5MB
    },
  });
  
  app.post('/clublisting', upload.single('posterImage'), (req, res) => {
    const newClub = new Club({
      name: req.body.name,
      type: req.body.type,
      desc: req.body.desc,
      googleFormLink: req.body.googleFormLink,
      posterImage: req.file.buffer,
    });
  
    newClub.save()
      .then(() => res.json('Club added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });