let fn = document.getElementById('fn');
let ln = document.getElementById('ln');
let confirm = document.getElementById('confirm');
let btn = document.getElementById('btn');
let bt = document.getElementById('bt');



let date = new Date();


let html = ``;

window.onload = () => {
    if (localStorage.getItem('register') == 'true') {
        btn.style.visibility = 'hidden';
        confirm.innerHTML = `<h4 class="text-center">Hi ${localStorage.getItem('name')}, Welcome Back</h4>`
        fn.value = ``;
        ln.value = ``;


    }
    fn.value = ``
}

const register = () => {
    let name = fn.value;
    if (name != '') {

        html = ``


        if (name.length > 2) {
            bt.innerHTML = html
            localStorage.setItem('name', name);
            let nm = localStorage.getItem('name');
            confirm.innerHTML = `<h4 class="text-center">Hi ${nm}, you are succesfully registered, you wll be getting notifiation for your daily quotes at every 10 minutes</h4>`
            localStorage.setItem('register', true)
            fn.value = ``
            ln.value = ``;

            let permission = Notification.requestPermission()
            setInterval(() => {
                fetch('https://api.kanye.rest/').then(response => response.json()).then((data) => {
                    const greeting = new Notification(data.quote);
                })
                console.log(date.getMinutes())
            }, 10000);
        }
    }
}
const logout = () => {
    let confirmlo = window.confirm('Do you want to log out?');
    if (confirmlo == true) {
        bt.innerHTML = `<button class="btn btn-primary mt-2" style="margin: auto; display: block;" id="btn" onclick="register();">Register</button>`
        localStorage.removeItem('name');
        localStorage.removeItem('register');
        location.reload();
    }
}


