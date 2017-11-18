var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
    res.render('profile', {
        userName: "John Doe",
        firstName: "John"
    });
});

module.exports = router;
