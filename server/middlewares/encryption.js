const crypto = require('crypto');

module.exports.generateSalt = function(){
    return crypto.randomBytes(128).toString('base64');
}

module.exports.generateHashedPassword = function(salt, password){
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
}