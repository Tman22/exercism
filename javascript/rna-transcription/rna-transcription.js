var dnaConverts = {C: 'G', G: 'C', T: 'A', A: 'U'};
function dnaTranscriber() {

}

function dnaConverter(dna) {
  return dnaConverts[dna];
}

dnaTranscriber.prototype.toRna = function(data) {
  return data.replace(/./g, dnaConverter)
}


module.exports = dnaTranscriber;
