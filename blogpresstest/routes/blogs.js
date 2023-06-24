var express = require('express');
var router = express.Router();
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
const auth = require("../middleware/verifytoken");

/* GET home page. */
router.get('/:blogName', function(req, res, next) {
  var content=('# I want to see if this can work');
  content=content+("\n ## testing another line");
  content+=("\n Try going to the [CNN home page](http://www.cnn.com)")
  var result = md.render(content);
  res.render('blogpage', { title: req.params.blogName, content: result });
});

router.get('/:blogName/:pageName', function(req, res, next) {
    var result = md.render('## markdown-it rulezz!');
    res.render('blogpage', { title: req.params.blogName + ' ' +req.params.pageName , content: result});
  });

module.exports = router;
