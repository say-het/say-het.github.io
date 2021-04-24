const time = document.getElementById('time');
const msg = document.getElementById('msg');
const img = document.getElementById('img');
let userName = prompt('Enter Your Name');
if (userName == null || userName == "") {
  userName = "Buddy"
}
function getTime(argument) {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = hour >= 12 ?'PM': 'AM';
  if (hour > 12) {
    hour -= 12;
  }
  if (hour == 0) {
    hour = 12
  }
  let fullTime = `${hour} : ${min} : ${sec}  ${ampm}`;
  if (hour < 12 && hour >= 6 && ampm == 'AM') {
    msg.innerHTML = `Good Morning ${userName}!`
  }
  if (hour < 6 && hour > 1 && ampm == 'AM') {
    msg.innerHTML = `Good Night ${userName}!`
  }
  if (hour == 12 && ampm == 'PM') {
    msg.innerHTML = `Good Noon ${userName}!`
  }
  if (hour == 12 && ampm == 'AM') {
    msg.innerHTML = `Good Night ${userName}!`
  }
  if (hour < 3 && ampm == 'PM') {
    msg.innerHTML = `Good Noon ${userName}!`
  }
  if (hour == 3 && ampm == 'PM') {
    msg.innerHTML = `Good Afternoon ${userName}!`
  }
  if (hour < 5 && hour > 3 && ampm == 'PM') {
    msg.innerHTML = `Good Afternoon ${userName}!`
  }
  if (hour == 5 && ampm == 'PM') {
    msg.innerHTML = `Good Evening ${userName}!`
  }
  if (hour < 8 && hour > 5 && ampm == 'PM') {
    msg.innerHTML = `Good Evening ${userName}!`
  }
  if (hour == 8 && ampm == 'PM') {
    msg.innerHTML = `Good Night ${userName}!`
  }
  if (hour < 12 && hour > 8 && ampm == 'PM') {
    msg.innerHTML = `Good Night ${userName}!`
  }
  time.innerHTML = fullTime;
}

function setWallpaper(argument) {
  if (msg.innerHTML == `Good Morning ${userName}!`) {
    img.src = 'http://localhost:8158/Images/morning.jpeg'
  }
  if (msg.innerHTML == `Good Noon ${userName}!`) {
    img.src = 'http://localhost:8158/Images/afternoon.jpeg'
  }
  if (msg.innerHTML == `Good Afternoon ${userName}!`) {
    img.src = 'http://localhost:8158/Images/afternoon.jpeg'
  }
  if (msg.innerHTML == `Good Evening ${userName}!`) {
    img.src = 'http://localhost:8158/Images/evening.jpeg'
  }
  if (msg.innerHTML == `Good Night ${userName}!`) {
    img.src = 'http://localhost:8158/Images/night.jpeg'
  }
  }
  setTimeout(setWallpaper, 100);
  getTime();
  setInterval(getTime, 1000);
