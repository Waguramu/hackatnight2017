var express = require('express');
var router = express.Router();
var apiKey = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Hello there, please look at the camera",
    apiKey
  });
});

module.exports = router;
