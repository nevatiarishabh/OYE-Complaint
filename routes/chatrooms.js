//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
var User = require('../model/user');
var Grievance = require('../model/grievance');


router.use(express.static(path.join(__dirname + 'public')));

router.get('/',function(req,res){
    res.render("organization_chat.ejs");
});

router.get('/post', isLoggedIn, function(req, res) {
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Posts'
    });
  });
  
  router.get('/health', isLoggedIn, function(req, res) {
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Health & Family Welfare'
    });
  });
  
  router.get('/external_affair', isLoggedIn, function(req, res) {
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'External Affair'
    });
  });
  
  router.get('/banking', isLoggedIn, function(req, res) {
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Banking'
    });
  });
  
  router.get('/insurance', isLoggedIn, function(req, res){
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Insurance'
    });
  });
  
  router.get('/telecoms', isLoggedIn, function(req, res){
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Telecoms'
    });
  });
  
  router.get('/road', isLoggedIn, function(req, res){
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Road Transport And Highways'
    });
  });
  
  router.get('/schooledu', isLoggedIn, function(req, res){
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'School Education and Literacy'
    });
  });
  
  router.get('/petroleum', isLoggedIn, function(req, res){
    res.render('index2.ejs', {
      user: req.user,
      Ministry: 'Petroleum and Natural Gas'
    });
  });

module.exports = router;

