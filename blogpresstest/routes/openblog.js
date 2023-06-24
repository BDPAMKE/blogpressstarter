var express = require('express');
var router = express.Router();
/* new comment */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('openblog', {title: 'Blog Name' });
});
router.get('/displayblog', function(req, res, next) {
  res.render('openblog', {title: req.body.blogname });
});

module.exports = router;
