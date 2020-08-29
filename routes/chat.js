//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
var User = require('../model/user');


router.get('/', isLoggedIn, (req, res) => {
  string= req.user._id
  res.redirect('http://localhost:3000/chat/'+string);
});

router.get('/:userid', (req, res) => {
  // console.log(req.params.userid)
  User.findOne({
    '_id': req.params.userid
  }, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      req.user = user
    }
  });
res.redirect('/chatrooms');
});


function isLoggedIn(req, res, next) {
  try {
    if (req.isAuthenticated()) {
      req.isLogged = true;
      return next();
    }
    res.redirect('/login-user');
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;
