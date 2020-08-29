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
module.exports = router;

