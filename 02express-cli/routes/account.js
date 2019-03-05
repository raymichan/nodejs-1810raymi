var express = require('express');
var router = express.Router();

/* GET account listing. */
router.post('/login', function(req, res, next) {
  res.send('登录');
});
router.post('/register', function(req, res, next) {
    res.send('注册');
  });
module.exports = router;
