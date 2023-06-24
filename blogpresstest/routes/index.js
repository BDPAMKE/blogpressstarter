var express = require('express');
var router = express.Router();
const myGetRestCall = require('./public/GetRestAPI');
const url = ''
const token = 'your-bearer-token';
myGetRestCall.getWithBearerToken(url, token)
.then(data => console.log(data))
.catch(error => console.error(error));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog Press' });
});

module.exports = router;
