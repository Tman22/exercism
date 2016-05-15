//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var last = input.split('')[input.length - 1]
  if (input === input.toUpperCase()) {
    return 'Whoa, chill out!'
  } else if (last === '?') {
    return 'Sure.'
  } else if (last === '.' || '!') {
    return 'Whatever.'
  }
};

module.exports = Bob;
