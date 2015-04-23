var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('late', { title: 'Steinberg.net Style Guides' });
});

module.exports = router;
