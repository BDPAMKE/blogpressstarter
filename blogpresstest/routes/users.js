var express = require('express');
var router = express.Router();

const auth = require("../middleware/verifytoken");
const myGetRestCall = require("../middleware/GetRestAPI");

/* GET users listing. */
router.get('/', function(req, res, next) {
 // this in you route 
 const url = 'https://blogpress.api.hscc.bdpa.org/v1/users?' //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;

  //########################################## 
 //This function will take the two variables and pass them to the Get RestAPI call 
  myGetRestCall.getWithBearerToken(url, token)
.then(data => res.render('users', { title: 'Test page', resultarray:data.users}))
.catch(error => console.error(error));

});

module.exports = router;

