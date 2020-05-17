const jwt = require('jsonwebtoken')
var users = require('./shared/users')
const secretKey = 'jhnxgfubegugryrr43y8tf85t'

exports.signToken = creds => jwt.sign(creds, secretKey)
exports.verifyToken = (token, callback) => jwt.verify(token, secretKey, (err, jwt_payload) => {
    if (err) callback(true, null)
    else if(users.checkUser(jwt_payload.username)) callback(false, users.checkUser(jwt_payload.username))
    else callback(true, null)
})