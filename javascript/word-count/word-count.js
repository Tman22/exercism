function Words() {

}

Words.prototype.count = function(string) {
  var arrayed = string.toLowerCase().replace(/\n|\t| +/g, " ").trim().split(' ');
  var hashed = {};
  for(var i = 0; i < arrayed.length; i++) {
    if (hashed.hasOwnProperty(arrayed[i])){
      hashed[arrayed[i]]++;
    } else {
      hashed[arrayed[i]] = 1;
    }
  }
  return hashed;
};

module.exports = Words;
