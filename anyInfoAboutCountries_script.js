// Blank string to add later
let html = ``;
//console.log("no error")
// html search Button
let searchBtn = document.getElementById('searchBtn');

// Search Box to get search Value From
let searchBox = document.getElementById('searchBox');

// Container to display results
let infoContainer = document.getElementById('infoContainer');

window.onload = ()=>{searchBox.focus()}

// When Anyone clicks on Search Button Below code will execute
searchBtn.addEventListener('click', ()=> {
  infoContainer.innerHTML = ""
  let search = searchBox.value;
  if (search != "" && search != " ") {
    //console.log("no error")
    // Api Fetching(For Search)
    fetch(`https://restcountries.com/v2/name/${search}`).then(response => response.json()).then((data) => {
      console.log(data)
      if (data.status == 404) {
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here<br>
        Data Not Available`;
        console.log("error")
      }
      else{
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here`
      // If There is many Countries so for that This is For Loop
        console.log("no error")
        html = ''
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
        let subregion = data[i].subregion;
        let nativeName = data[i].nativeName;
        let domain = data[i].topLevelDomain[0]
     
   
            let mainLanguage = data[i].languages[0].name
            
            //console.log(mainLanguage)
   
        
// The HTML Part to Display on the screen
        html += `<div class="jumbotron" id="${name}">
        <h3>${name}</h3>
        <p class="lead">
        <img width="200" height="121" src="${flag}" alt="${name}" />
        </p>
        <hr class="my-4">
        <p>
        Region : ${region}<br>
        Sub Region : ${subregion}<br>
        Native Name : ${nativeName}<br>
        Capital : ${capital}<br>
        Population : ${population}<br>
        Main Language : ${mainLanguage} <br>
        Area : ${area}<br>
        Demonym : ${demonym}<br>
        Currency Symbol : ${symbol}<br>
        Currency Code : ${currencyCode}<br>
        Currency Name : ${currencyName}<br>
        Calling Code : +${callingCodes}<br>
        Domain : ${domain}<br>
        Short Name: ${shortName}
        </p>
        <a class="btn btn-primary btn-lg" href="http://www.google.com/search?q=${name}" role="button">More About ${name}</a>
        </div>`;
        // Displaying Html
        console.log(html)
        infoContainer.innerHTML = html
      }
      }
    })

  } 
})

// Below code will execute when someone hits enter to search
window.addEventListener("keypress", function(e) {
  
  console.log(e.keyCode)
  if (e.keyCode === 13) {
    e.preventDefault();
    
    // Search Box Value
    let search = searchBox.value;
    
    // Api Fetching(For Search)
    fetch(`https://restcountries.com/v2/name/${search}`).then(response => response.json()).then((data) => {
       if (data.status == 404) {
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here<br>
        Data Not Available`;
        console.log("error")
      }
      else{
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.innerHTML = `New Search Items Listed Here`
       // If There is many Countries so for that This is For Loop
html = ''
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
        let subregion = data[i].subregion;
        let nativeName = data[i].nativeName;
        let domain = data[i].topLevelDomain[0];
let mainLanguage = data[i].languages[0].name
        // The HTML Part to Display on the screen
        html += `<div class="jumbotron" class="center" id="${name}">
        <h3>${name}</h3>
        <p class="lead">
        <img width="200" height="121" src="${flag}" alt="${name}" />
        </p>
        <hr class="my-4">
        <p>
        Region : ${region}<br>
        Sub Region : ${subregion}<br>
        Native Name : ${nativeName}<br>
        Capital : ${capital}<br>
        Population : ${population}<br>
        Main Language : ${mainLanguage} <br>
        Area : ${area}<br>
        Demonym : ${demonym}<br>
        Currency Symbol : ${symbol}<br>
        Currency Code : ${currencyCode}<br>
        Currency Name : ${currencyName}<br>
        Calling Code : +${callingCodes}<br>
        Domain : ${domain}<br>
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
