var express = require('express');
var router = express.Router();
const myGetRestCall = require('../public/GetRestAPI');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog Press' });
});

module.exports = router;
