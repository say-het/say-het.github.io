// Blank string to add later
let html = ``;

// html search Button
let searchBtn = document.getElementById('searchBtn');

// Search Box to get search Value From
let searchBox = document.getElementById('searchBox');

// Container to display results
let infoContainer = document.getElementById('infoContainer');

// When Anyone clicks on Search Button Below code will execute
searchBtn.addEventListener('click', ()=> {
  let search = searchBox.value;
  if (search != "" && search != " ") {
    
    // Api Fetching(For Search)
    fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(response => response.json()).then((data) => {

      if (data.status == 404) {
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here<br>
        Data Not Available`;

      }
      else{
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here`
      // If There is many Countries so for that This is For Loop

      for (i in data) {
        let name = data[i].name;
        let region = data[i].region;
        let population = data[i].population;
        let capital = data[i].capital;
        let area = data[i].area;
        let flag = data[i].flag;
        let demonym = data[i].demonym;
        let symbol = data[i].currencies[0].symbol;
        let currencyCode = data[i].currencies[0].code;
        let currencyName = data[i].currencies[0].name;
        let callingCodes = data[i].callingCodes[0];
        let shortName = data[i].alpha3Code;
        
// The HTML Part to Display on the screen
        html += `<div class="jumbotron" id="${name}">
        <h3>${name}</h3>
        <p class="lead">
        <img width="200" height="121" src="${flag}" alt="${name}" />
        </p>
        <hr class="my-4">
        <p>
        Region : ${region}<br>
        Capital : ${capital}<br>
        Population : ${population}<br>
        Area : ${area}<br>
        Demonym : ${demonym}<br>
        Symbol : ${symbol}<br>
        Currency Code : ${currencyCode}<br>
        Currency Name : ${currencyName}<br>
        Calling Code : +${callingCodes}<br>
        Short Name: ${shortName}
        </p>
        <a class="btn btn-primary btn-lg" href="http://www.google.com/search?q=${name}" role="button">More About ${name}</a>
        </div>`;
        // Displaying Html
        infoContainer.innerHTML = html
      }
      }
    })

  } 
})

// Below code will execute when someone hits enter to search
window.addEventListener("keypress", function(e) {
  

  if (e.keyCode === 13) {
    e.preventDefault();
    
    // Search Box Value
    let search = searchBox.value;
    
    // Api Fetching(For Search)
    fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(response => response.json()).then((data) => {
       if (data.status == 404) {
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here<br>
        Data Not Available`;

      }
      else{
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here`
       // If There is many Countries so for that This is For Loop
      for (i in data) {
        let name = data[i].name;
        let region = data[i].region;
        let population = data[i].population;
        let capital = data[i].capital;
        let area = data[i].area;
        let flag = data[i].flag;
        let demonym = data[i].demonym;
        let symbol = data[i].currencies[0].symbol;
        let currencyCode = data[i].currencies[0].code;
        let currencyName = data[i].currencies[0].name;
        let callingCodes = data[i].callingCodes[0];
        let shortName = data[i].alpha3Code;
        // The HTML Part to Display on the screen
        html += `<div class="jumbotron" id="${name}">
        <h3>${name}</h3>
        <p class="lead">
        <img width="200" height="121" src="${flag}" alt="${name}" />
        </p>
        <hr class="my-4">
        <p>
        Region : ${region}<br>
        Capital : ${capital}<br>
        Population : ${population}<br>
        Area : ${area}<br>
        Demonym : ${demonym}<br>
        Symbol : ${symbol}<br>
        Currency Code : ${currencyCode}<br>
        Currency Name : ${currencyName}<br>
        Calling Code : +${callingCodes}<br>
        Short Name: ${shortName}
        </p>
        <a class="btn btn-primary btn-lg" href="http://www.google.com/search?q=${name}" role="button">More About ${name}</a>
        </div>`;
        // Displaying HTML
        infoContainer.innerHTML = html
      }
      }
    })

  }
  }
  

)
