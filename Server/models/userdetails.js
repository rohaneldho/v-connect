const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userdetails = new Schema({
    phone: String,
    instagram: String,
    twitter: String,
    linkedIn: String,
    github: String,
    fullName: String,
    email: String,
    campus: String,
    skills: [String],
    projects: [String],
});
module.exports = mongoose.model('userdetails', userdetails);