var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/members', function(req, res, next) {
  res.render('members');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/faqs', function(req, res, next) {
  res.render('faqs');
});

module.exports = router;
