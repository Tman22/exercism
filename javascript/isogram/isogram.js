function Isogram(word) {
  this.word = word;
}

Isogram.prototype.isIsogram = function() {
  var string = this.word.replace(/[- ]/g, "");
  var stringSplit = string.split("");
  for(var i = 0; i < stringSplit.length; i++) {
    var regex = new RegExp(stringSplit[i], "gi")
    if (string.replace(regex, "").length !== string.length - 1 ) {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
