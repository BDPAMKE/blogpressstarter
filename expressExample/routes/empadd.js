var express = require('express');
var router = express.Router();

const multer = require("multer");
const upload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empadd', { title: 'Products Are Us Employee Add' });
});

module.exports = router;