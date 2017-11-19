var express = require('express');
var router = express.Router();
var moment = require('moment');

router.get('/', function(req, res, next) {
    var transactionRecords = [];
    year = 2017;
    transactionRecords.push({
        date: moment().subtract(1, 'days').format('MMM DD'),
        year, 
        info: "32.5 EUR spent at GAS STATION at 13:15"
    });
    transactionRecords.push({
        date: moment().subtract(1, 'days').subtract(5, 'hours').format('MMM DD'),
        year, 
        info: "69 EUR spent at CAFE at 14:24"
    });
    transactionRecords.push({
        date: moment().subtract(3, 'days').subtract(2, 'hours').format('MMM DD'),
        year, 
        info: "13.5 EUR spent at DRIVE THRU at 21:09"
    });
    res.render('transactionRecords', {
        transactionRecords: transactionRecords
    });
});

module.exports = router;
