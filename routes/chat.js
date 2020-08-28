//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
var User = require('../model/user');
var Message = require('../model/message');
var http = require('http').Server(router);
var io = require('socket.io')(http);

io.on('connection', () =>{
    console.log('a user is connected')
})

router.use(express.static(path.join(__dirname + '/../public')));

router.get('/', isLoggedIn, function(req, res) {
  res.render('chat.ejs');
});

router.get('/message', isLoggedIn, function(req, res) {
    Message.find({},(err, messages)=> {
        res.send(messages);
      })
});

router.post('/message', isLoggedIn, function(req, res) {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      io.emit('message', req.body);
      res.sendStatus(200);
    })
})

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
