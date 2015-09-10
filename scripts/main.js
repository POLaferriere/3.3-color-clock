
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

var hexColor = leadingZero((Math.round(Number(hours)/24*255)).toString(16)) + leadingZero((Math.round(Number(minutes)/60*255)).toString(16)) + leadingZero(Math.round((Number(seconds)/60*255)).toString(16));
var hexColor2 = "000000";


var background = document.querySelector('body');
background.style.background = '#' + hexColor + ' radial-gradient(#' + hexColor + ' , #' + hexColor2 + ')';

var barWidth = Number(Math.round((time.getSeconds() / 60) * 100));

var bar = document.querySelector('hr');
bar.style.width = barWidth + '%';



function timeRefresh() {
  time = new Date();

  hours = leadingZero(time.getHours());
  minutes = leadingZero(time.getMinutes());
  seconds = leadingZero(time.getSeconds());
  currentTime = hours + ":" + minutes + ":" + seconds;



  hexColor = leadingZero((Math.round(Number(hours)/24*255)).toString(16)) + leadingZero((Math.round(Number(minutes)/60*255)).toString(16)) + leadingZero(Math.round((Number(seconds)/60*255)).toString(16));
  hexColor2 = '000000';

  document.querySelector(".time").textContent = currentTime;

  document.querySelector(".hex").textContent = "#" + hexColor;

  barWidth = Number(Math.round((time.getSeconds() / 60) * 100));

  bar.style.width = barWidth + '%';

  background.style.background = '#' + hexColor + ' radial-gradient(#' + hexColor + ' , #' + hexColor2 + ')';
}

setInterval(timeRefresh, 1000);
