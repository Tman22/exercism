function dnaTranscriber() {

}

dnaTranscriber.prototype.toRna = function(data) {
  if(data === 'C') {
    return 'G'
  }
};

module.exports = dnaTranscriber;
