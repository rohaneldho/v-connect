const isLoggedIn = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      // If authenticated, proceed to the next middleware or route handler
      return next();
    } else {
      // If not authenticated, redirect the user to the login page or send an error response
      res.status(401).send('Unauthorized'); // You can customize this response as needed
    }
  };
  
  module.exports = { isLoggedIn };