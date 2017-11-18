var express = require('express');
var router = express.Router();
var apiKey = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' ,
    apiKey
  });
});

module.exports = router;
