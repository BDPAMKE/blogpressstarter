var express = require('express');
var router = express.Router();
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");


/* GET home page. */
router.get('/:blogName', function(req, res, next) {
  var content=('# I want to see if this can work');
  content=content+("\n ## testing another line");
  content+=("\n Try going to the [CNN home page](http://www.cnn.com)")
  var result = md.render(content);
  res.render('blogpagecontent', { title: req.params.blogName, content: result });
});

router.get('/:blogName/:pageName', function(req, res, next) {
  const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/' + req.params.blogName + '/pages/' + req.params.pageName //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;
 //This function will take the two variables and pass them to the Get RestAPI call 
 myGetRestCall.getWithBearerToken(url, token)
 .then(data =>
 {console.log('data',data)
 res.render('blogpagecontent', { title: req.params.blogName + ' ' +req.params.pageName , content: data.page.contents})})
 .catch(error => console.error(error));
 
 });



module.exports = router;
