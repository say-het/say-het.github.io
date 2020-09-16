// Container where search bar and search button is
let searchContainer = document.getElementById('searchContainer');
// Templete to add details in Project List
const dummyTitle = "dummyTitle";
const dummyDescription = "dummyDescription";
const dummyLink = "dummyLink";
let dT = 'Any Countries' Any Information';
let dD = 'You can find any Countries' Any information like It's Name,Population,Area,Capital,Calling Code etc..';
let dL = 'anyInfoAboutCountry_index.html';
localStorage.setItem('dT',dT)
localStorage.setItem('dD',dD)
localStorage.setItem('dL',dL)
// This is where projects are listed
let projectsList = document.getElementById('projectsList');
    html = `<div id="accordion">
    <div class="card">
    <div class="card-header" id="headingOne">
    <h5 class="mb-0">
    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  ${localStorage.getItem(dT)}
    </button>
    </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
    <div class="card-body">
  ${localStorage.getItem(dD)}
     <a href=${localStorage.getItem(dL)}>Go To Project...</a>
    </div>
    </div>
    </div>

    </div>`;
projectsList.innerHTML += html;
   
