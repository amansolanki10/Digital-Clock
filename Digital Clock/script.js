var hourElement = document.getElementById('hour');
var minuteElement = document.getElementById('min');
var secondElement = document.getElementById('sec');

function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  
  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondElement.textContent = seconds;
}

setInterval(updateClock, 1000);


