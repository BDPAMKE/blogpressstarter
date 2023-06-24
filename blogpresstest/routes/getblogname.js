var express = require('express');
var router = express.Router();
/* new comment */
/* GET home page. */

router.post('/', (req, res) => {
  const blogName = req.body.blogname;

  console.log(`Your blog name is ${blogName}`);
  var result = 'hello world'

  // res.send("Your form has been submitted!");
  res.render('blogpage', { title: blogName, content: result });
});


module.exports = router;
