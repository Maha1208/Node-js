const crypto = require('crypto');

function generatePassword(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

const password = generatePassword(8);
console.log(password);