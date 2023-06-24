var express = require('express');
var router = express.Router();
const myGetRestCall = require("../middleware/GetRestAPI");

/* new comment */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('openblog', {title: 'Blog Name' });
});
router.post('/', function(req, res, next) {
  //########################################## 
  const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/' + req.body.blogname + '/pages' //- where the URL is whatever Get RestAPI Request  you are calling
 const token = '934404b0-ddf2-4595-8e2f-3790873ddf20'//process.env.BEARER_TOKEN;
 console.log("body",req.body.blogname)
 //This function will take the two variables and pass them to the Get RestAPI call 
 myGetRestCall.getWithBearerToken(url, token)
 .then(data =>
 {console.log('data',data)
  res.render('blogpage', { title: 'Gabbi Test page', resultarray:data.pages})})
 .catch(error => console.error(error));
 
 });
 
 


module.exports = router;
