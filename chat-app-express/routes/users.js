var express = require('express');
var router = express.Router();
var users = require('../shared/users')
var authenticate = require('../authenticate')

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let { username, password } = req.body
  users.push({ username, password })
  let token = authenticate.signToken({ username })
  console.log('STEP2', token)
  res.json({ success: true, token })
});


module.exports = router;
