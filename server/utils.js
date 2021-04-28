//不足10时在前面补零
function frontZero(time) {
  //return time<10?"0"+time:""+time
  return ("0" + time).slice(-2);
}

//format YYYY-MM-DDTHH:mm:ss
module.exports = {
  dateFormat: function () {
    const date = new Date();
    const Year = date.getFullYear();
    const Month = date.getMonth() + 1;
    const Day = date.getDate();
    const Hours = date.getHours();
    const Minutes = date.getMinutes();
    const Secondes = date.getSeconds();
    const dateFormat =
      Year +
      "-" +
      frontZero(Month) +
      "-" +
      frontZero(Day) +
      "T" +
      frontZero(Hours) +
      ":" +
      frontZero(Minutes) +
      ":" +
      frontZero(Secondes);
    return dateFormat;
  },
  getPageNum: function (length, step) {
    return Math.ceil(length / step);
  },
};
