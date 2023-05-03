//blank string to add later
let html = ``;
let apikey = '0038ac0e2e154ab6a8681741232104';

//imp variables to change between farenheit-celcius
let c, f, cfChange, cfChangeAgain, flc, flf;

//getting important elements from DOM
let searchBox = document.getElementById('searchBox');
let searchBtn = document.getElementById('searchBtn');
let refreshBtn = document.getElementById('refreshBtn');
let cf = document.getElementById('cf');
let mainInfo = document.getElementById('main');

//focus on input field after window loads
window.onload = () => {
    searchBox.focus();
    cf.innerHTML = 'Farenheit'
}

// search button click funciton for fetching api
searchBtn.addEventListener('click', () => {

    // taking search value
    let searchValue = searchBox.value;

    //search field shoud not be blank or spaces
    if (searchValue != "" && searchValue != " ") {

        // fetching api
        fetch(`https://api.weatherapi.com/v1/current.json?key=0038ac0e2e154ab6a8681741232104&q=${searchValue}`).then(response => response.json()).then((data) => {

            // if there's key-value pair named error in data so it will show that search is inappropriate
            if ('error' in data) {
                mainInfo.innerHTML = `<center><div class="alert alert-danger" role="alert">There's no place named ${searchValue}</div></center>`;
            }

            else {
                // taking data from api
                let temp_c = data.current.temp_c;
                let temp_f = data.current.temp_f;
                let feelslike_c = data.current.feelslike_c;
                let feelslike_f = data.current.feelslike_f;
                let humidity = data.current.humidity;
                let location = data.location.name;
                let country = data.location.country;
                let localTime = data.location.localtime.substring(11, 16);

                // global variables for further use
                c = temp_c;
                f = temp_f;
                flf = feelslike_f;
                flc = feelslike_c;

                //updating html
                html = `<center><div class="card center" id="${location}">
            <h5 class="card-header" >${location} (${country})</h5>
            <div class="card-body">
              <h5 class="card-title">Temperature: <span id="cfChange">${temp_c}°C</span> </h5>
              <p class="card-text">Feels Like: <span id="cfChangeAgain">${feelslike_c}°C</span> </br>
              Humidity: ${humidity} </br> Local time: ${localTime}
              </p>
              <a href="http://www.google.com/search?q=${location} (${country}) Weather">
              <button class="btn btn-primary">View More</button>
              </a>
            </div></div></center>`;
                mainInfo.innerHTML = html;

                //taking elements again
                let temp = document.getElementById('cfChange');
                let temp2 = document.getElementById('cfChangeAgain');

                //temparory swap variables to change between farenheit-celcius
                cfChange = temp;
                cfChangeAgain = temp2;
            }

        })
    }
}
)

// same for hitting enter key
window.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {

        // By default hitting enter refreshes the page while focused on input field it prevents that
        e.preventDefault();

        // taking search value
        let searchValue = searchBox.value;

        //search field shoud not be blank or spaces
        if (searchValue != "" && searchValue != " ") {

            // fetching api
            fetch(`https://api.weatherapi.com/v1/current.json?key=0038ac0e2e154ab6a8681741232104&q=${searchValue}`).then(response => response.json()).then((data) => {

                // if there's key-value pair named error in data so it will show that search is inappropriate
                if ('error' in data) {
                    mainInfo.innerHTML = `<center><div class="alert alert-danger" role="alert">There's no place named ${searchValue}</div></center>`;
                }

                else {
                    // taking data from api
                    let temp_c = data.current.temp_c;
                    let temp_f = data.current.temp_f;
                    let feelslike_c = data.current.feelslike_c;
                    let feelslike_f = data.current.feelslike_f;
                    let humidity = data.current.humidity;
                    let location = data.location.name;
                    let country = data.location.country;
                    let localTime = data.location.localtime.substring(11, 16);

                    // global variables for further use
                    c = temp_c;
                    f = temp_f;
                    flf = feelslike_f;
                    flc = feelslike_c;

                    //updating html
                    html = `<center><div class="card center" id="${location}">
            <h5 class="card-header" >${location} (${country})</h5>
            <div class="card-body">
              <h5 class="card-title">Temperature: <span id="cfChange">${temp_c}°C</span> </h5>
              <p class="card-text">Feels Like: <span id="cfChangeAgain">${feelslike_c}°C</span> </br>
              Humidity: ${humidity} </br> Local time: ${localTime}
              </p>
              <a href="http://www.google.com/search?q=${location} (${country}) Weather">
              <button class="btn btn-primary">View More</button>
              </a>
            </div></div></center>`;
                    mainInfo.innerHTML = html;

                    //taking elements again
                    let temp = document.getElementById('cfChange');
                    let temp2 = document.getElementById('cfChangeAgain');

                    //temparory swap variables to change between farenheit-celcius
                    cfChange = temp;
                    cfChangeAgain = temp2;
                }

            })
        }
    }

})

cf.addEventListener('click', () => {
    if (cf.innerHTML == 'Farenheit') {
        cfChange.innerHTML = `${f}°F`
        cf.innerHTML = 'Celcius'
        cfChangeAgain.innerHTML = `${flf}°F`;
    }
    else {
        cf.innerHTML = 'Farenheit'
        cfChange.innerHTML = `${c}°C`
        cfChangeAgain.innerHTML = `${flc}°C`;

    }
})
