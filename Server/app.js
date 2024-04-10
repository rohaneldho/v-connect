const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("./models/user.js");
const Project = require("./models/project.js");
const clubb  = require("./models/clubb.js");

const Club= require("./models/club.js");
const passport = require('passport');
const session = require('express-session')
const LocalStrategy=require('passport-local')
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
const multer = require('multer');
const server = http.createServer(app);
const PORT = process.env.PORT || 3400;
const userdetail = require("./models/userdetails.js");

const { isLoggedIn } = require('./middleware');

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
  app.get('/clubpost', (req, res) => {
    Club.find()
      .then(clubs => res.json(clubs))
      .catch(err => res.status(400).json('Error: ' + err));
  });
 
// Middleware function to fetch user details and attach them to the request object
const getUserDetails = async (req, res, next) => {
    try {
        // Retrieve user details from the database based on the logged-in user's email
        const userDetails = await userdetail.findOne({ email: req.user.email });
        
        // Attach the user details to the request object
        req.userDetails = userDetails;
        console.log(req.userDetails)
        // Move to the next middleware function
        next();
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Error fetching user details' });
    }
};

// Route to render the user page
app.get('/userpage', isLoggedIn, getUserDetails, (req, res) => {
    // Send the user details obtained from the middleware as JSON
    console.log(req.userDetails)
    res.json(req.userDetails);
});

app.get('/people', async (req, res) => {
    try {
      const people = await userdetail.find({}, 'fullName skills -_id'); // fetch only 'fullName' and 'skills' fields
      res.json(people);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/userdetails/:fullName', async (req, res) => {
    try {
      const user = await userdetail.findOne({ fullName: req.params.fullName });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
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



// User login
app.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async(req, res) => {
    // Send a response to the frontend upon successful authentication
    res.json({ status: "success", message: "Welcome" });
    console.log("Hi, Welcome!!!");
});

// Club login
app.post("/clublogin", passport.authenticate("local", { failureRedirect: "/clublogin", failureFlash: true }), async(req, res) => {
    // Send a response to the frontend upon successful authentication
    res.json({ status: "success", message: "Welcome" });
    console.log("Hi, Welcome!!!");
});

app.post('/makeproj', async (req, res) => {
    try {
        // Extract user ID from the request (assuming user is logged in)
        const userId = req.user._id; // Assuming user ID is stored in req.user._id

        // Destructure project data from request body
        const { name, desc, num, type } = req.body;

        // Create new project with user ID
        const newProject = new Project({ name, desc, num, type, createdBy: userId });
        const savedProject = await newProject.save();

        console.log('Project created successfully:', savedProject);

        res.send('Project creation successful');
    } catch (error) {
        console.error('Project creation error:', error);
        res.status(500).send('Error occurred during project creation');
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
      clubName: req.body.clubName,
      type: req.body.type,
      description: req.body.description,
      googleFormLink: req.body.googleFormLink,
      posterImage: req.file.buffer,
    });
  
    newClub.save()
      .then(() => res.json('Club added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  app.post('/userpage', async (req, res) => {
    try {
      console.log(req.body); // Log the request body to debug
  
      // Destructure the data from the request body
      const { phone, instagram, twitter, linkedIn, github, fullName, email, campus, skills, projects } = req.body;
  
      // Check if a user with the given email already exists
      let userdetails = await userdetail.findOne({ email: email });
  
      if (userdetails) {
        // If the user exists, update their details
        userdetails.phone = phone;
        userdetails.instagram = instagram;
        userdetails.twitter = twitter;
        userdetails.linkedIn = linkedIn;
        userdetails.github = github;
        userdetails.fullName = fullName;
        userdetails.campus = campus;
        userdetails.skills = skills;
        userdetails.projects = projects;
      } else {
        // If the user does not exist, create a new entry
        userdetails = new userdetail({ phone, instagram, twitter, linkedIn, github, fullName, email, campus, skills, projects });
      }
  
      // Save the user details
      const savedUserDetails = await userdetails.save();
      console.log('User details saved successfully');
      res.status(200).json(savedUserDetails); // Send the saved user details back to the frontend
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred while saving user details: ${error.toString()}`);
    }
  });
  

  