var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog Press' });
});

module.exports = router;
