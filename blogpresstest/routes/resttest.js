var express = require('express');
var router = express.Router();
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");


/* GET resttest page */
router.get('/', function(req, res, next) {
 
  
  res.render('resttest', { title:"resttest"});
});

router.post('/', function(req, res, next) {
  console.log("req " , JSON.stringify(req.body))
  if(req.body.method.toUpperCase() == "GET") { res.render('resttest', { title:"resttest get " });}


  res.render('resttest', { title:"resttest " });
 });



module.exports = router;
