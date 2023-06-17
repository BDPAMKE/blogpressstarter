var express = require('express');
var router = express.Router();
/* new comment */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('editblogpage', {title: 'Edit Blog Page' });
});

module.exports = router;
