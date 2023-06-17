var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifytoken");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const httpRequest = require('https'); //This may end up being https in other situations

  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'bearer '+process.env.BEARER_TOKEN,
      'content-type': 'application/json'
    }};
  //Authorization header will need to be updated
    const request = httpRequest.request('https://blogpress.api.hscc.bdpa.org/v1/info', options, response => {
    //console.log('Status', response.statusCode);
    //console.log('Headers', response.headers);
    let responseData = '';
  
    response.on('data', dataChunk => {
      responseData += dataChunk;
    });
    response.on('end', () => {
      //console.log('Response: ', responseData); //debugging code to test
      var result=JSON.parse(responseData);
      if (result.success){
        var blogcount=result.info.blogs;
        var pagecount=result.info.pages;
        var usercount=result.info.users;
        res.render('userdata', { title: 'User Data Page', blogs: blogcount, pages:pagecount, users:usercount });
      }
      else{
        res.render('error', {title: "API Failed"});
      }
    });
  });
  request.on('error', error => console.log('ERROR', error));
  request.end();
});

module.exports = router;

