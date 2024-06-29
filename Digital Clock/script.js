let hourElement = document.getElementById('hour');
let minuteElement = document.getElementById('min');
let secondElement = document.getElementById('sec');

function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  
  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondElement.textContent = seconds;
}

setInterval(updateClock, 1000);



