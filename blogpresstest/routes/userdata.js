var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");

/* GET users listing. */
router.get('/', function(req, res, next) {
 // this in your route 
 const url = 'https://blogpress.api.hscc.bdpa.org/v1/info' //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;

  //########################################## 
 //This function will take the two variables and pass them to the Get RestAPI call 
  myGetRestCall.getWithBearerToken(url, token)
.then(data => 
 {
  //console.log("REST CALL ", data);
      if (data.success){
        var blogcount=data.info.blogs;
        var pagecount=data.info.pages;
        var usercount=data.info.users;
        res.render('userdata', { title: 'User Data Page', blogs: blogcount, pages:pagecount, users:usercount });
      }
      else{
        res.render('error', {title: "API Failed"});
      }



  })
.catch(error => console.error(error));

//##############################################
});

module.exports = router;

