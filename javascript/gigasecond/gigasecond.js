function Gigasecond(date) {
  this.startDate = date;
}

Gigasecond.prototype.date = function() {
  var endTime = new Date(this.startDate.getTime() + 1000000000000);
  return endTime;
};


module.exports = Gigasecond;
