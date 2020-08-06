//jshint esversion:6

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const grievanceSchema = new mongoose.Schema({
  UserId: String,
  local: {
    password: String,
  },
  Name: String,
  Email: String,
  loginType: {
    type: String
  },
});


module.exports = mongoose.model("Grievance", grievanceSchema);
