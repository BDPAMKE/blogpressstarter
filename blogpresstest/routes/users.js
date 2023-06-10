var express = require('express');
var router = express.Router();


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
    console.log('Status', response.statusCode);
    console.log('Headers', response.headers);
    let responseData = '';
  
    response.on('data', dataChunk => {
      responseData += dataChunk;
    });
    response.on('end', () => {
      console.log('Response: ', responseData); //debugging code to test
      res.render('index', { title: 'Test page'});
    });
  });
  request.on('error', error => console.log('ERROR', error));
  request.end();
});

module.exports = router;

