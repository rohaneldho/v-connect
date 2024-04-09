const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const project=new Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,

    },
    type:{
        type:String,
        required:true,

    },
    num:{
        type:String,
        required:true,

    }
})

module.exports = mongoose.model('project', project);