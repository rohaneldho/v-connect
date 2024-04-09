const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const multer = require('multer');
const club = new Schema({
    clubName: String,
    type: String,
    description: String,
    googleFormLink: String,
    posterImage: Buffer
  });
  module.exports= mongoose.model('club', club);