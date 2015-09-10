
function leadingZero (numb) {
  var number = String(numb);
  while (number.length < 2) {
    number = "0" + number;
  }
  return number;
}

var time = new Date();
var hours = leadingZero(time.getHours());
var minutes = leadingZero(time.getMinutes());
var seconds = leadingZero(time.getSeconds());
var currentTime = hours + ":" + minutes + ":" + seconds;
document.querySelector(".time").textContent = currentTime;

var hexColor = leadingZero(Number(hours).toString(16)) + leadingZero(Number(minutes).toString(16)) + leadingZero(Number(seconds).toString(16));
var hexColor2 = leadingZero((Number(hours)+20).toString(16)) + leadingZero((Number(minutes)+20).toString(16)) + leadingZero((Number(seconds)+20).toString(16));


var background = document.querySelector('body');
background.style.background = '#' + hexColor + ' radial-gradient(#' + hexColor + ' , #' + hexColor2 + ')';

var barWidth = Number(Math.round((time.getSeconds() / 60) * 100));

var bar = document.querySelector('hr');
bar.style.width = barWidth + '%';



function timeRefresh() {
  time = new Date();

  hours = leadingZero(time.getHours());
  minutes = leadingZero(time.getHours());
  seconds = leadingZero(time.getSeconds());
  currentTime = hours + ":" + minutes + ":" + seconds;



  hexColor = leadingZero(Number(hours).toString(16)) + leadingZero(Number(minutes).toString(16)) + leadingZero(Number(seconds).toString(16));
  hexColor2 = leadingZero((Number(hours)+20).toString(16)) + leadingZero((Number(minutes)+20).toString(16)) + leadingZero((Number(seconds)+20).toString(16));

  document.querySelector(".time").textContent = currentTime;

  document.querySelector(".hex").textContent = "#" + hexColor;

  barWidth = Number(Math.round((time.getSeconds() / 60) * 100));

  bar.style.width = barWidth + '%';

  background.style.background = '#' + hexColor + ' radial-gradient(#' + hexColor + ' , #' + hexColor2 + ')';
}

setInterval(timeRefresh, 1000);
