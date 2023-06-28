var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");
const myPatchRestCall = require("../middleware/PatchRestAPI");

/* GET home page. */
router.get('/:blogName/:pageName', auth, function(req, res, next) {
  const role=res.locals.role;
  const username=res.locals.result;
  if (role=="administrator"){
    const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/' + req.params.blogName + '/pages/' + req.params.pageName //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;
 //This function will take the two variables and pass them to the Get RestAPI call 
 myGetRestCall.getWithBearerToken(url, token)
 .then(data =>
 {console.log('data',data);
 res.render('builder', { title: 'Admin Access', name:req.params.blogName, content:data.page.contents });})
 .catch(error => console.error(error));
 
 }

    
  else{
    res.render('login',{title:"Please login"});
  }
  
});

/* POST builder page. */
router.post('/:blogName/:pageName', auth, function(req, res, next) {
  const role=res.locals.role;
  const username=res.locals.result;
  if (role=="administrator"){
    const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/' + req.params.blogName + '/pages/' + req.params.pageName //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;
 var newdata={'contents':req.body.content};
 newdata=JSON.stringify(newdata);
 //console.log("New data:"+newdata);
 //This function will take the two variables and pass them to the Get RestAPI call 
 myPatchRestCall.patchWithBearerToken(url, token, newdata)
 .then(data =>
 {console.log('data',data);
 res.render('builder', { title: 'Admin Access', name:req.params.blogName, content:newdata.contents });})
 .catch(error => console.error(error));
 
 }

    
  else{
    res.render('login',{title:"Please login"});
  }
  
});

module.exports = router;