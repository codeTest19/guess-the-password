const randomstring = require('randomstring');
const stringShuffle = require('string-shuffle');

function shuffleString(password) {
  return stringShuffle(password);
}

function generateRandomString(options) {
  return randomstring.generate(options);
}


module.exports.utils = {
  shuffleString,
  generateRandomString,
};
