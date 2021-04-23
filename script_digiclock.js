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
  // let millsec = d.getMilliseconds();
  let ampm = hour >= 12 ?'PM':'AM';
  if (hour>12){
    hour -= 12; 
  }
  let fullTime = `${hour} : ${min} : ${sec}  ${ampm}`;
  if (hour < 12 && ampm == 'AM') {
    msg.innerHTML = `Good Morning ${userName}!`
  }
  if(hour == 12 && ampm == 'PM'){
    msg.innerHTML = `Good Noon ${userName}!`
  }
  if(hour < 3 && ampm == 'PM'){
    msg.innerHTML = `Good Noon ${userName}!`
  }
  if(hour == 3 && ampm == 'PM'){
    msg.innerHTML = `Good Afternoon ${userName}!`
  }
  if(hour < 5 && hour > 3 && ampm == 'PM'){
    msg.innerHTML = `Good Afternoon ${userName}!`
  }
  if(hour == 5 && ampm == 'PM'){
    msg.innerHTML = `Good Evening ${userName}!`
  }
  if(hour < 8 && hour > 5 && ampm == 'PM'){
    msg.innerHTML = `Good Evening ${userName}!`
  }
  if(hour == 8 && ampm == 'PM'){
    msg.innerHTML = `Good Night ${userName}!`
  }
  if(hour < 12 && hour > 8 && ampm == 'PM'){
    msg.innerHTML = `Good Night ${userName}!`
  }
  time.innerHTML = fullTime;
}
let date = new Date();
let hours = date.getHours();
let ampms = hours >= 12 ?'PM':'AM';
if (hours>12){
    hours -= 12; 
}
console.log(hours)
if (hours >= 8 && ampms == 'PM') {
    img.src = 'http://localhost:8158/Images/night.jpeg'    
}
if (hours >= 5 && hours < 8 && ampms == 'PM') {
    img.src = 'http://localhost:8158/Images/evening.jpeg'    
}
if (hours >= 7  && hours < 12 && ampms == 'AM') {
    img.src = 'http://localhost:8158/Images/morning.jpeg'    
}
if (hours == 12 && ampms == 'PM') {
    img.src = 'http://localhost:8158/Images/afternoon.jpeg'    
}
if (hours < 5 && ampms == 'PM') {
    img.src = 'http://localhost:8158/Images/afternoon.jpeg'    
}

getTime();
setInterval(getTime, 1000);
