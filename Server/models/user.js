const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new Schema({
    
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    campus1:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
    
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);