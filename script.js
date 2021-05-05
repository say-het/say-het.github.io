// Container where search bar and search button is
let searchContainer = document.getElementById('searchContainer');

localStorage.clear();
let T = `Any Countries' Any Information`;
let D = `You can find any Countries' Any information like It's Name,Population,Area,Capital,Calling Code etc..`;
let L = `anyInfoAboutCountry_index.html`;
localStorage.setItem('T',T)
localStorage.setItem('D',D)
localStorage.setItem('L',L)
// This is where projects are listed
let projectsList = document.getElementById('projectsList');
    html = `<div id="accordion">
    <div class="card">
    <div class="card-header" id="headingOne">
    <h5 class="mb-0">
    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  ${localStorage.getItem('T')}
    </button>
    </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
    <div class="card-body">
  ${localStorage.getItem('D')}
     <a href=${localStorage.getItem('L')}>Go To Project...</a>
    </div>
    </div>
    </div>

    </div>`;
projectsList.innerHTML += html;
   
