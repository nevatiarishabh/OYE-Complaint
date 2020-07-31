//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
var {
  User
} = require('../model/user');

router.use(express.static(path.join(__dirname + '/../public')));

router.get('/', isLoggedIn, function(req, res) {
  res.render('organization', {
    user: req.user
  });
});

router.get('/post', isLoggedIn, function(req, res) {
  res.render('postMinistry', {
    user: req.user,
    Ministry: 'Posts'
  });
});

router.get('/health', isLoggedIn, function(req, res) {
  res.render('health', {
    user: req.user,
    Ministry: 'Health & Family Welfare'
  });
});

router.get('/external_affair', isLoggedIn, function(req, res) {
  res.render('external_affair', {
    user: req.user,
    Ministry: 'External Affair'
  });
});

router.get('/banking', isLoggedIn, function(req, res) {
  res.render('banking', {
    user: req.user,
    Ministry: 'Banking'
  });
});

router.get('/insurance', isLoggedIn, function(req, res){
  res.render('insurance', {
    user: req.user,
    Ministry: 'Insurance'
  });
});

router.get('/telecoms', isLoggedIn, function(req, res){
  res.render('telecoms', {
    user: req.user,
    Ministry: 'Telecoms'
  });
});


function isLoggedIn(req, res, next) {
  try {
    if (req.isAuthenticated()) {
      req.isLogged = true;
      return next();
    }
    res.redirect('/login');
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;
