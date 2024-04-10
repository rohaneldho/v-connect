const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const clubmem = new Schema({
    
    
    
});
clubmem.plugin(passportLocalMongoose);

module.exports = mongoose.model('clubmem ', clubmem );