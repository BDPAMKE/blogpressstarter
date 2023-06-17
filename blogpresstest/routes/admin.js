var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin Access' });
});

module.exports = router;
