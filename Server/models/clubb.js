const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const clubbSchema = new mongoose.Schema({
  // Define other fields as needed
});

// Apply passportLocalMongoose plugin
clubbSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('clubb', clubbSchema);
