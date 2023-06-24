var express = require('express');
var router = express.Router();
/* new comment */
/* GET home page. */

router.post('/', (req, res) => {
  const blogName = req.body.blogname;

  console.log(`Your blog name is ${blogName}`);
  var result = 'hello world'

  const httpRequest = require('https'); //This may end up being https in other situations

  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'bearer '+process.env.BEARER_TOKEN,
      // 'Authorization': 'bearer 934404b0-ddf2-4595-8e2f-3790873ddf20',
      'content-type': 'application/json'
    }};

    // const request = httpRequest.request('https://blogpress.api.hscc.bdpa.org/v1/blogs/'+blogName+'/pages', options, response => {
    // using the mock server for this example since not able to add a new blog to the real server
    const request = httpRequest.request('https://private-2c64a3-hsccjcat4d54.apiary-mock.com/v1/blogs/'+ blogName +'/pages', options, response => {

    console.log('Status', response.statusCode);
    console.log('Headers', response.headers);
    let responseData = '';
  
    response.on('data', dataChunk => {
      responseData += dataChunk;
    });
    response.on('end', () => {
      console.log('Response: ', responseData); //debugging code to test
      var result=JSON.parse(responseData).pages;
      console.log(result);
      res.render('blogpage', { title: blogName, resultarray: result });
    });
  });
  request.on('error', error => console.log('ERROR', error));
  request.end();


  // res.send("Your form has been submitted!");

});


module.exports = router;
