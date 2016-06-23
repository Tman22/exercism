function Pangram(sentence) {
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function(sentence) {
  var string = this.sentence.toLowerCase().replace(/[^a-z]/g, "");
  var object = {};
  for(var i = 0; i < string.length; i++)  {
    object[string[i]] = 1;
  }

  if(Object.keys(object).length === 26) {
    return true;
  }
  return false;
}

module.exports = Pangram
