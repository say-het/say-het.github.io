
let lowerCase = "1890abcdefghijklm74#*/hh><?! & 63nopqrstuvwx52yz@^%_-:;";
let btn = document.getElementById('btn');
btn.addEventListener('click', passwordGen);
function passwordGen() {
  
  let password = document.getElementById('password');
  password.innerHTML= "";
  let valMain = document.getElementById('val');
 
  let val = valMain.value;

  
if (val <= 1000) {
  
  for (let i = 0; i < val; i++) {
    
    let x = lowerCase[Math.floor(Math.random()*26)];
    if (x != undefined) {
      password.innerHTML += x;
    }
  } 
}
else {
  password.innerHTML = `<h3>Please Enter Value Less Than 1000</h3>`;
}
if (val == "") {
  password.innerHTML = `<h3>Please Enter Some Value</h3>`;
}

}
