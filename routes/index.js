var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/repos/test', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end('{"url": "git@trufa-lan:root/test.git"}');
});

module.exports = router;
