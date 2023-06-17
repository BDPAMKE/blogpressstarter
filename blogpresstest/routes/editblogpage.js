var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('editblogpage', {title: 'Edit Blog Page' });
});

module.exports = router;
