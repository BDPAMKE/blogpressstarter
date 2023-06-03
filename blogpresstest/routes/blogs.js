var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:blogName', function(req, res, next) {
  res.render('index', { title: req.params.blogName });
});

router.get('/:blogName/:pageName', function(req, res, next) {
    res.render('index', { title: req.params.blogName + ' ' +req.params.pageName });
  });

module.exports = router;