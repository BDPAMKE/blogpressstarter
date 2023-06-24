var express = require('express');
var router = express.Router();


const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog Press' });
});

module.exports = router;
